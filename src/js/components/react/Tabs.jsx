// @ts-nocheck
const Tabs = ({ tabs }) => {
  return (
    <div id="tabs" className="header__tabs">
      {tabs.map(({ label, category }) => (
        <button key={category} data-category={category.toLowerCase()}>{label}</button>
      ))}
    </div>
  );
};

export { Tabs };