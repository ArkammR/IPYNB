/**
 * Tests for POST /api/contact
 *
 * Run with: npx jest app/api/contact/route.test.ts
 * (requires jest + ts-jest — see note below if not installed)
 *
 * To install test deps:
 *   npm install --save-dev jest ts-jest @types/jest
 *   npx ts-jest config:init
 */

import { NextRequest } from 'next/server';
import { POST } from './route';

// Mock Resend so no real emails are sent during tests
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ id: 'mock-email-id' }),
    },
  })),
}));

const makeRequest = (body: object) =>
  new NextRequest('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

describe('POST /api/contact', () => {
  const validPayload = {
    name: 'Rahmath Rumi',
    business: 'Ceylon Chai',
    email: 'rahmath@example.com',
    phone: '+94771234567',
    industry: 'Retail & Supermarket',
    projectType: 'POS System',
    budget: 'LKR 100,000 – 200,000',
    message: 'I need a POS system for my shop.',
  };

  it('returns 200 on valid submission', async () => {
    const res = await POST(makeRequest(validPayload));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it('returns 400 when name is missing', async () => {
    const res = await POST(makeRequest({ ...validPayload, name: '' }));
    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.error).toMatch(/name/i);
  });

  it('returns 400 when email is missing', async () => {
    const res = await POST(makeRequest({ ...validPayload, email: '' }));
    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.error).toMatch(/email/i);
  });

  it('returns 400 when email is invalid format', async () => {
    const res = await POST(makeRequest({ ...validPayload, email: 'not-an-email' }));
    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.error).toMatch(/email/i);
  });

  it('returns 400 when message is missing', async () => {
    const res = await POST(makeRequest({ ...validPayload, message: '' }));
    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.error).toMatch(/message/i);
  });

  it('optional fields are allowed to be empty', async () => {
    const res = await POST(makeRequest({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello',
    }));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
  });
});
