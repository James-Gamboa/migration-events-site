import { EventCard } from './EventCard';

const MainContent = () => {
  return (
    <main id="main-gallery" className="main-gallery main-container">
      <ul id="gallery" className="container error-container gallery home-gallery">
          <EventCard
            title="Hookie DC (2023): Cloud 9"
            image="https://res.cloudinary.com/iireii/image/upload/v1686105236/Cetav/events/music-002_wex6ub.jpg"
            date="Friday, June 16, 12:00 PM"
            address="Festival Grounds"
            city="Fort Washington"
            state="MD"
            price="$60.00"
            id="565049637677"
            category="music"
          />
        
          <EventCard
            title="Kostume Kult Presents: A.I. A.I. Oh! - Black & Light Ball 2023"
            image="https://res.cloudinary.com/iireii/image/upload/v1686105556/Cetav/events/music-004_h768uj.jpg"
            date="Saturday, December 2, 5:24 PM"
            address="The Tailor Public House"
            city="New York"
            state="NY"
            price="$44.82"
            id="628644290997"
            category="music"
          />
        
          <EventCard
            title="Jouvert In June"
            image="https://res.cloudinary.com/iireii/image/upload/v1686105556/Cetav/events/music-003_ua6wne.jpg"
            date="Saturday, June 10, 10:00 AM"
            address="Soca Dome"
            city="Hartford"
            state="CT"
            price="$30.00"
            id="559192468727"
            category="music"
          />
        
          <EventCard
            title="PRESS PLAY NYC - THE OUTDOOR, MULTI-GENRE / DAY PARTY EXPERIENCE"
            image="https://res.cloudinary.com/iireii/image/upload/v1686105556/Cetav/events/music-005_hs3oaw.jpg"
            date="Sunday, June 11, 3:00 PM"
            address="ArtsDistrict Brooklyn"
            city="Brooklyn"
            state="NY"
            price="$38.21"
            id="605155244627"
            category="music"
          />
      </ul>
    </main>
  );
};

export { MainContent };
