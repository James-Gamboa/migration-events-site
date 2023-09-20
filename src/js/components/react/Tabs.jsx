import { homeTabs } from '../../config.js';

const Tabs = () => {
  return (
    <div id="tabs" className="header__tabs">
      {homeTabs.map(({ label, category }) => (
        <button key={category} data-category={category.toLowerCase()}>{label}</button>
      ))}
    </div>
  );
};

export {Tabs};
