import { useEffect, useState } from 'react'

function getIndiaCalendarDate(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date)

  return Object.fromEntries(parts.map(({ type, value }) => [type, Number(value)]))
}

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'internships', label: 'Internships' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'journey', label: 'Journey' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ active, onSelect, birthday }) {
  const [open, setOpen] = useState(false)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const timeText = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(now).toUpperCase()
  const dateText = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(now)
  const indiaDate = getIndiaCalendarDate(now)
  const birthdayMonth = Number(birthday?.month)
  const birthdayDay = Number(birthday?.day)
  const birthdayDateIsValid = Number.isInteger(birthdayMonth)
    && birthdayMonth >= 1
    && birthdayMonth <= 12
    && Number.isInteger(birthdayDay)
    && birthdayDay >= 1
    && birthdayDay <= 31
    && new Date(Date.UTC(2024, birthdayMonth - 1, birthdayDay)).getUTCDate() === birthdayDay
    && new Date(Date.UTC(2024, birthdayMonth - 1, birthdayDay)).getUTCMonth() === birthdayMonth - 1
  const isBirthday = birthdayDateIsValid
    && indiaDate.month === birthdayMonth
    && indiaDate.day === birthdayDay
  let nextBirthdayYear = indiaDate.year
  if (indiaDate.month > birthdayMonth || (indiaDate.month === birthdayMonth && indiaDate.day > birthdayDay)) {
    nextBirthdayYear += 1
  }
  const todayUtc = Date.UTC(indiaDate.year, indiaDate.month - 1, indiaDate.day)
  const nextBirthdayUtc = birthdayDateIsValid
    ? Date.UTC(nextBirthdayYear, birthdayMonth - 1, birthdayDay)
    : todayUtc
  const daysUntilBirthday = Math.round((nextBirthdayUtc - todayUtc) / 86_400_000)

  const handleClick = (e, id) => {
    e.preventDefault()
    onSelect(id)
    setOpen(false)
  }

  return (
    <header>
      <nav className="navbar">
        <span className="logo">Aritra</span>
        <ul className={open ? 'open' : ''}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
                onClick={(e) => handleClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-clock" aria-label={`${timeText}, ${dateText}, Indian Standard Time`}>
          <time className="nav-clock-time" dateTime={now.toISOString()}>{timeText} IST</time>
          <span className="nav-clock-date">{dateText}</span>
          <span className={`nav-birthday${isBirthday ? ' nav-birthday-today' : ''}`} aria-live={isBirthday ? 'polite' : undefined}>
            {birthdayDateIsValid
              ? isBirthday
                ? '🎉 Happy Birthday, Aritra! 🎂'
                : `🎂 ${daysUntilBirthday} day${daysUntilBirthday === 1 ? '' : 's'} to birthday`
              : 'Set birthday in src/data.js'}
          </span>
        </div>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
      </nav>
    </header>
  )
}
