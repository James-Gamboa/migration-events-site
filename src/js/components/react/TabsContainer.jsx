import React, { useState, useEffect } from 'react';
import fetchEventsByCategories from '../../services/api';
import Tabs from './Tabs';
import MainContent from './MainContent';

const TabsContainer = ({ tabs }) => {
  const [categoryData, setCategoryData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFetchCategory = (category) => {
    if (categoryData[category]) {
      setSelectedCategory(category);
      return;
    }
    setLoading(true);
    fetchEventsByCategories(category)
      .then((response) => {
        setCategoryData((prevData) => ({
          ...prevData,
          [category]: response,
        }));
        setSelectedCategory(category);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleFetchCategory('Music');
  }, []);

  return (
    <div>
      <Tabs
        tabs={tabs}
        selectedCategory={selectedCategory}
        onTabClick={handleFetchCategory}
      />
      {loading ? (
        <p>Loading, please wait</p>
      ) : (
        selectedCategory && (
          <MainContent events={categoryData[selectedCategory]} />
        )
      )}
    </div>
  );
};

export default TabsContainer;
