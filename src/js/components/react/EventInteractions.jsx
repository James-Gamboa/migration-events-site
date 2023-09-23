const EventsInteractions = () => {
  return (
    <div className="interactions-container">
      <div className="going-and-interested">
        <button className="going">Going!</button>
        <button className="interested">Interested</button>
      </div>
      <button className="heart" aria-label="Favorite"></button>
    </div>
  )
}

export { EventsInteractions };