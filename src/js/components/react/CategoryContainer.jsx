import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';

function CategoryContainer({ category }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setLoading(false);
  }, [category]);

  return (
    <>
      {loading ? (
        <p>Loading, please wait</p>
      ) : (
        <MainContent />
      )}
    </>
  );
}

export default CategoryContainer;

