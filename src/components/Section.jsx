export default function Section({ id, title, children }) {
  return (
    <section id={id} className="page">
      <h2>{title}</h2>
      {children}
    </section>
  )
}