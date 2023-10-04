import React, { useState, useEffect } from 'react';
import fetchEventsByCategories from '../../services/api';
import Tabs from './Tabs';
import MainContent from './MainContent';

const TabsContainer = ({ tabs }) => {
  const [categoryData, setCategoryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Music');

  const handleFetchCategory = (category) => {
    setLoading(true);
    fetchEventsByCategories(category)
      .then((response) => {
        setCategoryData((prevData) => ({
          ...prevData,
          [category]: response,
        }));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleFetchCategory(selectedCategory);
  }, [selectedCategory]);

  const handleTabClick = (category) => {
    setSelectedCategory(category);
    if (!categoryData[category]) {
      handleFetchCategory(category);
    }
  };

  return (
    <div>
      <Tabs
        tabs={tabs}
        selectedCategory={selectedCategory}
        onTabClick={handleTabClick}
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
