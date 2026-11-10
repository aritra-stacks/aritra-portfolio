import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import SpaceScene from './components/SpaceScene'
import CardList from './components/CardList'
import ContactSection from './components/ContactSection'
import JourneyTimeline from './components/JourneyTimeline'
import {
  about,
  education,
  skills,
  interests,
  projects,
  hackathons,
  internships,
  certificates,
  journey,
  contact,
  birthday,
} from './data'

function EventPostMenu({ posts, title }) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-post-options`
  const platforms = [
    ['linkedin', 'LinkedIn'],
    ['instagram', 'Instagram'],
  ]

  return (
    <div className="event-post-menu">
      <button
        className="event-post-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? 'Close post options' : 'View post'} <span aria-hidden="true">{isOpen ? '−' : '↗'}</span>
      </button>
      {isOpen && (
        <div className="event-post-options" id={panelId}>
          <p>Which platform would you like to view it on?</p>
          <div className="event-post-links">
            {platforms.map(([platform, label]) => {
              const postUrl = posts[platform]
              return postUrl ? (
                <a
                  className={`event-post-link event-post-link-${platform}`}
                  href={postUrl}
                  key={platform}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label} ↗
                </a>
              ) : (
                <button
                  className={`event-post-link event-post-link-${platform} is-pending`}
                  key={platform}
                  type="button"
                  disabled
                  title={`Add the direct ${label} post URL in src/data.js`}
                >
                  {label} <span>Link pending</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  const [selectedEducation, setSelectedEducation] = useState(null)
  const [certificateCategory, setCertificateCategory] = useState('Education')
  const [educationCertificateInstitution, setEducationCertificateInstitution] = useState(
    'Acharya Narendra Dev College'
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.dataset.page = active
  }, [active])

  useEffect(() => {
    if (!selectedEducation) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedEducation(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selectedEducation])

  return (
    <>
      <SpaceScene active={active} />
      <Navbar active={active} onSelect={setActive} birthday={birthday} />
      <main>
        {active === 'home' && <Hero onSelect={setActive} contact={contact} />}

        {active === 'about' && (
          <Section id="about" title="About Me">
            <div className="about">
              <img src="/profile-preview.jpg" alt="Aritra Das" className="about-photo" loading="lazy" decoding="async" />
              <div className="about-content">
                <span className="about-eyebrow">CURIOUS BY NATURE · BUILDING STEP BY STEP</span>
                <h2>Aspiring Software Developer<br /><span>&amp; AI Engineer</span></h2>
                <p className="about-text">{about}</p>
                <div className="about-focus">
                  <h3>Areas I’m exploring</h3>
                  <div className="about-tags">
                    {interests.map((interest) => <span className="about-tag" key={interest}>{interest}</span>)}
                  </div>
                </div>
                <p className="about-learning"><span className="learning-indicator" /> Currently learning Python and C++</p>
              </div>
            </div>
          </Section>
        )}

        {active === 'education' && (
          <Section id="education" title="Education">
            {education.length === 0 ? (
              <p className="empty">Education details coming soon.</p>
            ) : (
              <div className="cards">
                {education.map((item) => (
                  <button
                    className="card card-clickable education-card"
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedEducation(item)}
                  >
                    <div className="edu">
                      {item.logo && (
                        <img src={item.logo} alt={`${item.title} logo`} className="edu-logo" loading="lazy" decoding="async" />
                      )}
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                        <span className="education-card-link">View details →</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </Section>
        )}

        {active === 'skills' && (
          <Section id="skills" title="Technical Skills">
            <div className="skills-ambient" aria-hidden="true">
              {[0, 1].map((row) => (
                <div className={`skills-ambient-row ${row === 1 ? 'reverse' : ''}`} key={row}>
                  <div className="skills-ambient-track">
                    {[...skills, ...skills].map((skill, index) => (
                      <span key={`${skill.name}-${index}`}>{skill.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {skills.length === 0 ? (
              <p className="empty">Jald hi add hoga.</p>
            ) : (
              <div className="skill-groups">
                {[['Programming Languages', skills.filter((skill) => skill.group === 'Programming Languages')], ['Tools & Libraries', skills.filter((skill) => skill.group !== 'Programming Languages')]].map(([group, items]) => (
                  <div className="skill-group" key={group}>
                    <h3>{group}</h3>
                    <div className="chips">
                      {items.map((skill) => (
                        <span className="chip skill-chip" key={skill.name}>
                          <img className="skill-logo" src={skill.logo} alt="" loading="lazy" />
                          <span>{skill.name}{skill.level && <small className="skill-level">{skill.level}</small>}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="skill-group">
                  <h3>Areas of Interest</h3>
                  <div className="chips">{interests.map((interest) => <span className="chip" key={interest}>{interest}</span>)}</div>
                </div>
              </div>
            )}
          </Section>
        )}

        {active === 'projects' && (
          <Section id="projects" title="Projects">
            <CardList
              items={projects}
              empty="Projects jald hi add honge."
              render={(p) => (
                <>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  {p.status && <p className="project-status"><strong>Status:</strong> {p.status}</p>}
                  {p.tech && (
                    <div className="chips">
                      {p.tech.map((t) => (
                        <span className="chip" key={t}>{t}</span>
                      ))}
                    </div>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="card-link">
                      View project →
                    </a>
                  )}
                  {p.repositoryPlaceholder && <small className="project-placeholder">{p.repositoryPlaceholder}</small>}
                </>
              )}
            />
          </Section>
        )}

        {active === 'hackathons' && (
          <Section id="hackathons" title="Hackathons and Workshops">
            <CardList
              items={hackathons}
              empty="Jald hi add hoga."
              render={(h) => (
                <>
                  <h3>{h.title}</h3>
                  <small>{h.date}</small>
                  <p>{h.detail}</p>
                  {h.socialPosts && (
                    <EventPostMenu posts={h.socialPosts} title={h.title} />
                  )}
                </>
              )}
            />
          </Section>
        )}

        {active === 'internships' && (
          <Section id="internships" title="Internships">
            <CardList
              items={internships}
              empty="Internship details will be added here."
              render={(internship) => (
                <>
                  <h3>{internship.title}</h3>
                  {internship.organization && <small>{internship.organization}</small>}
                  {internship.period && <p>{internship.period}</p>}
                  {internship.description && <p>{internship.description}</p>}
                  {internship.skills?.length > 0 && (
                    <div className="chips">
                      {internship.skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}
                    </div>
                  )}
                </>
              )}
            />
          </Section>
        )}

       {active === 'certificates' && (
  <Section id="certificates" title="Certificates and Achievements">
    <p className="certificates-intro">
      A collection of certificates, hackathon participation, and other milestones.
    </p>
    <div className="category-buttons">
      {['Education', 'Hackathons', 'Other Activities', 'Skills'].map((category) => (
        <button
          key={category}
          type="button"
          className={`category-button ${
            certificateCategory === category ? 'active' : ''
          }`}
          aria-pressed={certificateCategory === category}
          onClick={() => setCertificateCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>

    {certificateCategory === 'Education' && (
      <div className="category-buttons institution-buttons" aria-label="Filter education certificates by institution">
        {[
          { label: 'IIT Madras', value: 'IIT Madras' },
          { label: 'ANDC', value: 'Acharya Narendra Dev College' },
        ].map((institution) => (
          <button
            key={institution.value}
            type="button"
            className={`category-button institution-button ${
              educationCertificateInstitution === institution.value ? 'active' : ''
            }`}
            aria-pressed={educationCertificateInstitution === institution.value}
            onClick={() => setEducationCertificateInstitution(institution.value)}
          >
            {institution.label}
          </button>
        ))}
      </div>
    )}

    <CardList
      items={certificates.filter(
        (certificate) =>
          certificate.category === certificateCategory &&
          (certificateCategory !== 'Education' ||
            certificate.institution === educationCertificateInstitution)
      )}
      empty={certificateCategory === 'Education'
        ? `No ${educationCertificateInstitution === 'IIT Madras' ? 'IIT Madras' : 'ANDC'} certificates added yet.`
        : `No items added for ${certificateCategory} yet.`}
      render={(certificate) => (
        <>
          {(certificate.image || certificate.preview) && (
            <a
              className="certificate-preview"
              href={certificate.file || certificate.image || certificate.preview}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${certificate.title}`}
            >
              <img
                src={certificate.image || certificate.preview}
                alt={`${certificate.title} certificate`}
                loading="lazy"
                decoding="async"
              />
              <span>View full certificate ↗</span>
            </a>
          )}
          <h3>{certificate.title}</h3>
          <p>{certificate.issuer}</p>
          {certificate.description && <p>{certificate.description}</p>}
          {certificate.venue && <p className="certificate-meta"><strong>Venue:</strong> {certificate.venue}</p>}
          {certificate.eventDate && <small>Event date: {certificate.eventDate}</small>}
          {certificate.duration && <p className="certificate-meta"><strong>Duration:</strong> {certificate.duration}</p>}
          {certificate.issueDate && <small className="certificate-issued">Issued: {certificate.issueDate}</small>}
          {certificate.verifyUrl && (
            <a className="card-link certificate-verify" href={certificate.verifyUrl} target="_blank" rel="noreferrer">
              Verify certificate on Neo4j ↗
            </a>
          )}
        </>
      )}
    />
  </Section>
)}

        {active === 'journey' && (
          <Section id="journey" title="My Journey">
            <JourneyTimeline items={journey} />
          </Section>
        )}

        {active === 'resume' && (
          <Section id="resume" title="Resume">
            <div className="resume-actions">
              <a href="/resume.pdf" className="btn" download="Aritra_Das_Resume.pdf">Download Resume</a>
              <a href="/resume.pdf" className="btn resume-preview" target="_blank" rel="noreferrer">Preview Resume ↗</a>
            </div>
          </Section>
        )}

        {active === 'contact' && (
          <Section id="contact" title="Contact Me">
            <ContactSection contact={contact} />
          </Section>
        )}
      </main>

      {selectedEducation && (
        <div className="modal-backdrop" onClick={() => setSelectedEducation(null)}>
          <div
            className="education-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="education-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close details"
              onClick={() => setSelectedEducation(null)}
            >
              ×
            </button>
            <div className="education-modal-heading">
              {selectedEducation.logo && (
                <img src={selectedEducation.logo} alt="" className="edu-logo" loading="lazy" decoding="async" />
              )}
              <div>
                <h2 id="education-modal-title">{selectedEducation.title}</h2>
                <p>{selectedEducation.detail}</p>
              </div>
            </div>
            {selectedEducation.description ? (
              <p className="education-modal-description">{selectedEducation.description}</p>
            ) : (
              <p className="education-modal-note">More details coming soon.</p>
            )}
            {selectedEducation.website && (
              <a className="card-link education-website-link" href={selectedEducation.website} target="_blank" rel="noreferrer">
                Visit official website ↗
              </a>
            )}
            {selectedEducation.duration && (
              <p className="education-modal-detail"><strong>Duration:</strong> {selectedEducation.duration}</p>
            )}
            {selectedEducation.highlights?.length > 0 && (
              <div className="education-modal-detail">
                <strong>Highlights</strong>
                <ul>
                  {selectedEducation.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className="btn modal-certificates"
              type="button"
              onClick={() => {
                setEducationCertificateInstitution(selectedEducation.title)
                setCertificateCategory('Education')
                setSelectedEducation(null)
                setActive('certificates')
              }}
            >
              View Certificates
            </button>
            <button className="btn modal-done" type="button" onClick={() => setSelectedEducation(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      <footer>
        <p>Made by Aritra Das</p>
      </footer>
    </>
  )
}
