import Image from 'next/image';

type MacFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  // Extra classes for the screenshot, e.g. a hover zoom driven by a parent `group`.
  imageClassName?: string;
};

// A MacBook drawn in CSS around a screenshot. The screen is 16:9; wide dashboard
// screenshots are anchored top-left so the sidebar and header stay visible.
export default function MacFrame({ src, alt, priority, sizes, imageClassName = '' }: MacFrameProps) {
  return (
    <div className="relative">
      <div className="rounded-t-[14px] border border-[#2a2d33] bg-[#16181c] p-[2.2%] pb-[2.6%] shadow-[0_30px_60px_-20px_rgba(20,23,28,0.35)]">
        <div className="mx-auto mb-[1.2%] h-1.5 w-1.5 rounded-full bg-[#3a3d44]" />
        <div className="relative aspect-[16/9] overflow-hidden rounded-[3px] bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes ?? '(max-width: 1024px) 100vw, 50vw'}
            className={`object-cover object-left-top ${imageClassName}`}
          />
        </div>
      </div>
      <div className="relative -mx-[7%] h-3 rounded-b-[10px] bg-gradient-to-b from-[#e3e4e7] to-[#b9bcc2] shadow-[0_8px_16px_-6px_rgba(20,23,28,0.3)] sm:h-4">
        <div className="absolute left-1/2 top-0 h-1.5 w-[16%] -translate-x-1/2 rounded-b-md bg-[#c9cbd0]" />
      </div>
    </div>
  );
}
