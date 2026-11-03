export default function CardList({ items, empty, render }) {
  if (items.length === 0) return <p className="empty">{empty}</p>

  return (
    <div className="cards">
      {items.map((item, i) => (
        <div className="card" key={i}>
          {render(item)}
        </div>
      ))}
    </div>
  )
}
