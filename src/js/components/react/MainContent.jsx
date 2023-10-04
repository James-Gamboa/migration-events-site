// @ts-nocheck
import { EventCard } from './EventCard';

const MainContent = ({ events }) => {
  if (events === undefined) {
    return <p>Loading events, please wait</p>;
  }

  return (
    <main id="main-gallery" className="main-gallery main-container">
      <ul id="gallery" className="container error-container gallery home-gallery">
        {events && events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
            price={`$${event.price}`}
            id={event.id}
            category={event.category}
          />
        ))}
      </ul>
    </main>
  );
};

export default MainContent;