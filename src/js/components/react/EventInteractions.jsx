import React, { useState } from 'react';

const EventsInteractions = () => {
  const [interaction, setInteraction] = useState('initial');
  const [isFavorite, setIsFavorite] = useState(false);

  const handleGoing = () => {
    setInteraction('going');
  };

  const handleInterested = () => {
    setInteraction('interested');
  };

  const handleRemove = () => {
    setInteraction('initial');
  };

  const handleFavorite = () => {
    setIsFavorite(prevIsFavorite => !prevIsFavorite);
  };

  return (
    <div className="interactions-container">
      {interaction === 'initial' && (
        <div className="going-and-interested">
          <button className="going" onClick={handleGoing}>Going!</button>
          <button className="interested" onClick={handleInterested}>Interested</button>
        </div>
      )}
      {interaction === 'going' && (
        <div>
          <span className="check">✔</span>
          <p>You're going to this event!</p>
          <button className="button-link" onClick={handleRemove}>Changed your mind?</button>
        </div>
      )}
      {interaction === 'interested' && (
        <div>
          <span className="check">✔</span>
          <p>You're interested in going!</p>
          <button className="button-link" onClick={handleRemove}>Changed your mind?</button>
        </div>
      )}
      <button className={isFavorite ? 'heart heart-blue' : 'heart'} onClick={handleFavorite} aria-label="Favorite">
      </button>
    </div>
  );
};

export { EventsInteractions };
