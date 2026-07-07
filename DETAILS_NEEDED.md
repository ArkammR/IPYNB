# Details Needed — IPYNB Solutions Site

Fill in these details and update the corresponding files listed.

---

## 1. Contact Section (`components/Contact.tsx`)

✅ All placeholders filled in:
- Phone: +94 72 421 8840
- Location: Colombo, Sri Lanka
- Hours: Mon – Sat, 9:00 AM – 5:00 PM
- Email: info@ipynb.site

> **Note:** Update your social media URLs in `components/Footer.tsx` once your pages are live:
> - Facebook: `https://facebook.com/ipynbsolutions`
> - Instagram: `https://instagram.com/ipynbsolutions`
> - LinkedIn: `https://linkedin.com/company/ipynbsolutions`

---

## 2. Resend Email Setup (`.env.local`)

### Step 1 — Create a Resend account
Go to: https://resend.com and sign up (free)

### Step 2 — Get your API Key
Go to: https://resend.com/api-keys → Create API Key → Copy it

### Step 3 — Add it to `.env.local`
```
RESEND_API_KEY=re_your_actual_key_here
```

### Step 4 — Verify your domain
Go to: https://resend.com/domains → Add Domain → Enter `ipynb.site`
Follow the DNS instructions to add the required TXT and MX records.

> Until the domain is verified, emails will send FROM `onboarding@resend.dev`.
> After verification, update the `from` field in `app/api/contact/route.ts`:
> Change: `from: 'IPYNB Solutions <onboarding@resend.dev>'`
> To: `from: 'IPYNB Solutions <info@ipynb.site>'`

### Step 5 — Set the receiving email
In `.env.local`, confirm:
```
CONTACT_EMAIL=info@ipynb.site
```

---

## 3. Vercel Deployment — Environment Variables

When you deploy to Vercel, add these in:
Project Settings → Environment Variables

| Key | Value |
|---|---|
| `RESEND_API_KEY` | your Resend API key |
| `CONTACT_EMAIL` | hello@ipynbsolutions.lk |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | 94724218840 |

---

## 4. SEO / Metadata (`app/layout.tsx`)

Update these stale values:

| Field | Current (wrong) | Replace With |
|---|---|---|
| `openGraph.description` | "Premium Jupyter notebooks..." | Proper agency description |
| `themeColor` (meta tag) | `#1a472a` | `#008B8B` |
| `authors` | `IPYNB.site` | `IPYNB Solutions` |

---

## 5. Hero Trust Stats (`components/Hero.tsx`)

Verify these numbers are accurate:
- `500+` Businesses served
- `24/7` WhatsApp support
- `0` Monthly fees

Update if needed.

---

## 6. Footer (`components/Footer.tsx`)

The following links are currently `href="#"` (dead links):
- Support
- Privacy Policy
- Terms of Service
- Documentation

Decide: create pages for these, or remove the ones you don't need yet.
