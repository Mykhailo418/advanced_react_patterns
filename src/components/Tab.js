import React from 'react';

const Tab = ({active, id, title, pattern: Pattern}) => {
  const activeClass = active ? 'active show' : '';
  return (
    <div className={`tab-pane fade ${activeClass}`}
      id={`v-pills-${id}`}
      role="tabpanel"
      aria-labelledby={`v-pills-${id}-tab`}>
      <Pattern />
    </div>
  );
}

export default Tab;
