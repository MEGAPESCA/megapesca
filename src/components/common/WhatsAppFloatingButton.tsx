"use client";

const DEFAULT_MESSAGE = "Hola, quiero más información sobre Megapesca.";

function getWhatsappHref() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  if (!phone) return "/contact";

  const text = encodeURIComponent(DEFAULT_MESSAGE);
  return `https://wa.me/${phone}?text=${text}`;
}

export default function WhatsAppFloatingButton() {
  const href = getWhatsappHref();
  const isExternal = href.startsWith("https://");

  return (
    <a
      href={href}
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
        <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M16.04 3C8.89 3 3.09 8.74 3.09 15.83c0 2.49.72 4.91 2.08 6.99L3 29l6.36-2.08a13.02 13.02 0 0 0 6.68 1.82h.01c7.15 0 12.95-5.74 12.95-12.83C29 8.74 23.2 3 16.04 3Zm0 23.53h-.01a10.8 10.8 0 0 1-5.5-1.52l-.4-.24-3.78 1.24 1.24-3.67-.26-.38a10.63 10.63 0 0 1-1.67-5.67c0-5.88 4.81-10.66 10.72-10.66 2.86 0 5.54 1.1 7.56 3.1a10.52 10.52 0 0 1 3.15 7.56c0 5.88-4.81 10.66-10.72 10.66Zm5.88-7.95c-.32-.16-1.9-.93-2.19-1.04-.29-.11-.5-.16-.71.16-.21.31-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.33-.49-2.53-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55h-.6c-.21 0-.56.08-.85.4-.29.31-1.11 1.09-1.11 2.66s1.14 3.08 1.29 3.29c.16.21 2.25 3.57 5.56 4.86.79.34 1.41.54 1.89.69.79.25 1.5.21 2.06.13.63-.1 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
