// @ts-nocheck
import formatDate from "../../utils/format-date";
import { EventsInteractions } from "./EventInteractions";

const EventCard = (props) => {
  return (
    <li className="gallery__card">
      <div className="card">
        <img src={props.image} alt={props.title} />
        <div className="gallery__text">
          <div className="event__info">
            <h3>{props.title}</h3>
            <p className="date">{formatDate(props.date)}.</p>
            <p>{props.location.address} • {props.location.city}, {props.location.land}.</p>
            <strong>{props.price}</strong>
          </div>
          <EventsInteractions />
        </div>
      </div>
    </li>
  );
};

export { EventCard };
