import { useEffect, useRef } from 'react'

function JourneyIcon({ type }) {
  if (type === 'education') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11v5c3.8 3 8.2 3 12 0v-5M22 9v6" />
      </svg>
    )
  }

  if (type === 'books') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h13a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4Z" />
        <path d="M4 17a2 2 0 0 1 2-2h13M8 8h7m-7 4h7" />
      </svg>
    )
  }

  if (type === 'network') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m7 7 5 3 5-3M7 17l5-3 5 3M7 7v10m10-10v10" />
        <circle cx="7" cy="7" r="2.2" />
        <circle cx="17" cy="7" r="2.2" />
        <circle cx="12" cy="12" r="2.2" />
        <circle cx="7" cy="17" r="2.2" />
        <circle cx="17" cy="17" r="2.2" />
      </svg>
    )
  }

  if (type === 'ai') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="7" width="16" height="13" rx="4" />
        <path d="M12 3v4M8 12h.01M16 12h.01M9 16h6M2 12h2m16 0h2" />
        <circle cx="12" cy="3" r="1" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  )
}

export default function JourneyTimeline({ items }) {
  const timeline = useRef(null)

  useEffect(() => {
    const nodes = timeline.current?.querySelectorAll('.journey-item')
    if (!nodes?.length) return undefined

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' })

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [items])

  if (!items.length) return <p className="empty">Journey milestones will be added here.</p>

  return (
    <div className="journey-timeline" ref={timeline}>
      {items.map((item, index) => (
        <article
          className={`journey-item journey-item-${item.icon}`}
          key={item.id}
          style={{ '--journey-order': index }}
        >
          <span className="journey-marker"><JourneyIcon type={item.icon} /></span>
          <div className="journey-card">
            <div className="journey-card-meta">
              <time className="journey-date">{item.date}</time>
              <span className="journey-category">{item.category}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
