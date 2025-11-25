export default function WhatsAppFab({ message, className = '' }) {
  const raw = import.meta.env.VITE_WHATSAPP_NUMBER ?? ''
  // normalize: remove anything that's not a digit
  const number = raw.replace(/[^0-9]/g, '')
  const text = encodeURIComponent(message ?? '')
  const href = number ? `https://wa.me/${number}${text ? `?text=${text}` : ''}` : '#'

  return (
    <a
      className={`whatsapp-fab ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M20.52 3.48A11.92 11.92 0 0 0 12 .5C6.21.5 1.5 5.21 1.5 11c0 1.94.5 3.78 1.46 5.42L.5 22.5l6.33-2.07A11.93 11.93 0 0 0 12 22.5c5.79 0 10.5-4.71 10.5-10.5 0-3.01-1.17-5.87-3.98-8.52z" fill="#25D366"/>
        <path d="M17.3 14.07c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.02-.53-.02-.15-.68-1.6-.94-2.22-.25-.58-.5-.5-.69-.51l-.59-.01c-.2 0-.53.07-.81.38-.28.31-1.06 1.03-1.06 2.51 0 1.48 1.09 2.9 1.24 3.1.15.2 2.14 3.36 5.2 4.72 3.06 1.36 3.06.91 3.61.85.55-.06 1.78-.73 2.02-1.44.24-.71.24-1.32.17-1.44-.07-.12-.25-.2-.55-.35z" fill="#fff"/>
      </svg>
    </a>
  )
}
