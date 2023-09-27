const Tabs = ({ tabs, selectedCategory, onTabClick }) => {
  return (
    <div id="tabs" className="header__tabs">
      {tabs.map(({ label, category }) => (
        <button
          key={category}
          onClick={() => onTabClick(category)}
          className={selectedCategory === category ? 'active' : ''}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

