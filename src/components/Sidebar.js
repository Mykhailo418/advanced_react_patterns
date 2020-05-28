import React, { useState } from 'react';
import Navlink from './Navlink';
import Tab from './Tab';

const Sidebar = ({patterns}) => {
  const [pattern, setPattern] = useState(patterns[0].id);

  const setActive = (id) => (e) => {
    setPattern(id);
  }

  return (
    <div className="row">
      <div className="col-3">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {outputNavLinks(patterns, pattern)}
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content" id="v-pills-tabContent">
          {outputTabs(patterns, pattern)}
        </div>
      </div>
    </div>
  );

  function outputNavLinks(patterns, activeId) {
    return patterns.map(({id, title}) =>
      <Navlink key={id}
               id={id}
               title={title}
               active={activeId === id}
               setActive={setActive} />);
  }

  function outputTabs(patterns, activeId) {
    return patterns.map(({id, title, component}) =>
      <Tab key={id}
           id={id}
           title={title}
           active={activeId === id}
           setActive={setActive}
           pattern={component} />);
  }
}

export default Sidebar;
