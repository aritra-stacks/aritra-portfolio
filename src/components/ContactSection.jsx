function ContactIcon({ type }) {
  const shared = {
    viewBox: '0 0 24 24',
    className: `contact-icon contact-icon-${type}`,
    'aria-hidden': true,
    focusable: 'false',
  }

  if (type === 'email' || type === 'secondary-email') {
    return (
      <svg {...shared}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    )
  }

  if (type === 'github') {
    return (
      <svg {...shared}>
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.24.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg {...shared} viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
      </svg>
    )
  }

  if (type === 'instagram') {
    return (
      <svg {...shared}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="contact-icon-dot" cx="17.5" cy="6.8" r="1" />
      </svg>
    )
  }

  if (type === 'telegram') {
    return (
      <svg {...shared}>
        <path d="m21.7 3.3-3.1 15.1c-.2 1.1-.8 1.4-1.7.9l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.5-.2L6.5 12.4l-4.6-1.4c-1-.3-1-1 .2-1.5L20.2 2.4c.9-.3 1.7.2 1.5.9Z" />
      </svg>
    )
  }

  if (type === 'reddit') {
    return (
      <svg {...shared}>
        <path d="M12 4.3a7.8 7.8 0 0 0-6.9 4.1 2.1 2.1 0 1 0-1.7 3.8 5.2 5.2 0 0 0-.1 1c0 3.7 3.9 6.7 8.7 6.7s8.7-3 8.7-6.7a5.2 5.2 0 0 0-.1-1 2.1 2.1 0 1 0-1.7-3.8A7.8 7.8 0 0 0 12 4.3Z" />
        <path d="m14.8 7.1.9-3.3 2.1.5" />
        <circle cx="8.8" cy="12.2" r="1" />
        <circle cx="15.2" cy="12.2" r="1" />
        <path d="M9.2 15.2a4.3 4.3 0 0 0 5.6 0" />
      </svg>
    )
  }

  return (
    <svg {...shared}>
      <path d="M20.4 3.6A11.8 11.8 0 0 0 1.8 17.8L.5 23.5l5.8-1.3a11.8 11.8 0 0 0 14.1-18.6ZM12 21a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-3.4.8.8-3.3-.2-.4A9.8 9.8 0 1 1 12 21Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.6 1.1 3 1.2 3.2c.2.2 2.2 3.4 5.3 4.7.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z" />
    </svg>
  )
}

const contactLinks = [
  {
    key: 'email',
    label: 'Email',
    value: (contact) => contact.email,
    description: 'For enquiries and collaboration',
    href: (contact) => `mailto:${contact.email}`,
  },
  {
    key: 'secondary-email',
    label: 'Secondary Email',
    value: (contact) => contact.secondaryEmail,
    description: 'You can also reach me here',
    href: (contact) => `mailto:${contact.secondaryEmail}`,
  },
  {
    key: 'github',
    label: 'GitHub',
    value: () => 'github.com/aritra-stacks',
    description: 'Explore my repositories',
    href: (contact) => contact.github,
    external: true,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: () => 'linkedin.com/in/aritra-das-b54bb8437',
    description: 'Let’s connect',
    href: (contact) => contact.linkedin,
    external: true,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    value: () => '@quantumaritra',
    description: 'Follow my updates',
    href: (contact) => contact.instagram,
    external: true,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    value: () => '+91 99992 98584',
    description: 'Start a direct chat',
    href: (contact) => contact.whatsapp,
    external: true,
  },
  {
    key: 'telegram',
    label: 'Telegram',
    value: () => '+91 99992 98584',
    description: 'Message me on Telegram',
    href: (contact) => contact.telegram,
    external: true,
  },
  {
    key: 'reddit',
    label: 'Reddit',
    value: () => 'u/IITIAN_ARITRA_DAS_DS',
    description: 'View my Reddit profile',
    href: (contact) => contact.reddit,
    external: true,
  },
]

export default function ContactSection({ contact }) {
  const availableLinks = contactLinks.filter((item) => item.href(contact))

  return (
    <div className="contact-content">
      <p className="contact-intro">
        Have a project, opportunity, or idea in mind? I’d be happy to hear from you.
      </p>

      <div className="contact-grid">
        {availableLinks.map((item, index) => (
          <a
            className={`contact-card contact-card-${item.key}`}
            href={item.href(contact)}
            key={item.key}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            style={{ '--contact-delay': `${index * 70}ms` }}
          >
            <span className="contact-icon-wrap">
              <ContactIcon type={item.key} />
            </span>
            <span className="contact-card-copy">
              <span className="contact-label">{item.label}</span>
              <strong>{item.value(contact)}</strong>
              <span className="contact-description">{item.description}</span>
            </span>
            <span className="contact-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </div>
  )
}
