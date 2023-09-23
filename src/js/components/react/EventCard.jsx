const EventCard = (props) => {
  return (
    <li className="gallery__card">
      <div className="card">
        <img src={props.image} alt={props.title} />
        <div className="gallery__text">
          <div className="event__info">
            <h3>{props.title}</h3>
            <p className="date">{props.date}.</p>
            <p>{props.address} • {props.city}, {props.state}.</p>
            <strong>{props.price}</strong>
          </div>
          <div className="interactions-container" data-id={props.id}>
            <div className="going-and-interested" data-id={props.id}>
              <button className="going" data-id={props.id} data-interaction="going" data-template="going">Going!</button>
              <button className="interested" data-id={props.id} data-interaction="interested" data-template="interested">Interested</button>
            </div>
            <button className="heart" data-id={props.id} data-interaction="favorites"></button>
          </div>
        </div>
      </div>
    </li>
  );
};

export { EventCard };
