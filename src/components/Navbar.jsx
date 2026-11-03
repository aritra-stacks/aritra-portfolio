import { useState } from 'react'

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

export default function Navbar({ active, onSelect }) {
  const [open, setOpen] = useState(false)

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
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
      </nav>
    </header>
  )
}
