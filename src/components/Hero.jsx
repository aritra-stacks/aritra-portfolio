import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function SocialMark({ type }) {
  if (type === 'email') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
  }
  if (type === 'whatsapp') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 3.8A11.5 11.5 0 0 0 2.1 17.7L.7 23.3l5.8-1.5A11.5 11.5 0 0 0 20.2 3.8Z" /><path d="M8.1 7.3c-.3-.7-.6-.7-.9-.7h-.7c-.3 0-.7.1-1 .5s-1.3 1.2-1.3 2.9 1.3 3.3 1.5 3.5 2.5 4 6.2 5.4c3 .1 3.8-.4 4.5-1.3s.7-1.7.5-1.9-.3-.3-.7-.5l-2.3-1.1c-.3-.1-.6-.2-.8.2l-1 1.2c-.2.2-.4.3-.8.1a9.4 9.4 0 0 1-2.8-1.7 10.4 10.4 0 0 1-1.9-2.4c-.2-.3 0-.5.2-.7l.6-.7c.2-.2.2-.4.3-.6s0-.4 0-.6Z" /></svg>
  }
  if (type === 'instagram') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-mark-dot" cx="17.5" cy="6.7" r="1" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.5 3.2-3.2 15.3c-.2 1.1-.8 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.5-.2L6.5 12.5 2 11.1c-1-.3-1-.9.2-1.4l17.7-6.9c.9-.3 1.7.2 1.6.4Z" /></svg>
}

export default function Hero({ onSelect, contact }) {
  const root = useRef()
  const [showTalkOptions, setShowTalkOptions] = useState(false)

  useGSAP(
    () => {
      gsap.from('.hero-anim', {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.25,
        ease: 'power3.out',
        delay: 0.3,
      })
    },
    { scope: root }
  )

  useEffect(() => {
    if (!showTalkOptions) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setShowTalkOptions(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [showTalkOptions])

  const instagramUsername = contact?.instagram?.split('/').filter(Boolean).at(-1)
  const channels = [
    { id: 'email', name: 'Email', detail: contact?.secondaryEmail, href: contact?.secondaryEmail ? `mailto:${contact.secondaryEmail}` : undefined },
    { id: 'whatsapp', name: 'WhatsApp', detail: 'Start a direct chat', href: contact?.whatsapp },
    { id: 'instagram', name: 'Instagram', detail: '@quantumaritra', href: instagramUsername ? `https://ig.me/m/${instagramUsername}` : contact?.instagram },
    { id: 'telegram', name: 'Telegram', detail: 'Message me directly', href: contact?.telegram },
  ].filter((channel) => channel.href)

  return (
    <section ref={root} id="home" className="hero">
      <h1 className="hero-anim">
        Hi, I'm <span className="highlight">Aritra Das</span>
      </h1>
      <p className="hero-anim">Aspiring AI Engineer and Data Scientist.</p>
      <div className="hero-anim">
        <a
          href="#about"
          className="btn"
          onClick={(e) => {
            e.preventDefault()
            onSelect('about')
          }}
        >
          Know more
        </a>
      </div>
      <div className="hero-talk hero-anim">
        <span>Want to talk to me?</span>
        <button className="talk-trigger" type="button" onClick={() => setShowTalkOptions(true)}>
          Say hi to me <span aria-hidden="true">↗</span>
        </button>
      </div>

      {showTalkOptions && (
        <div className="talk-modal-backdrop" onClick={() => setShowTalkOptions(false)}>
          <div
            className="talk-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="talk-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="talk-modal-close" type="button" aria-label="Close" onClick={() => setShowTalkOptions(false)}>×</button>
            <p className="talk-modal-eyebrow">LET’S CONNECT</p>
            <h2 id="talk-modal-title">Say hi to me 👋</h2>
            <p className="talk-modal-copy">Choose where you’d like to start a conversation.</p>
            <div className="talk-options">
              {channels.map((channel) => (
                <a className={`talk-option talk-option-${channel.id}`} href={channel.href} key={channel.id} {...(channel.id === 'email' ? {} : { target: '_blank', rel: 'noreferrer' })}>
                  <span className="talk-option-icon"><SocialMark type={channel.id} /></span>
                  <span className="talk-option-text"><strong>{channel.name}</strong><small>{channel.detail}</small></span>
                  <span className="talk-option-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
