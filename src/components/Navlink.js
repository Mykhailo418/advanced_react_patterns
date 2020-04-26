import React from 'react';

const Navlink = ({active, id, title, setActive}) => {
  const activeClass = active ? 'active' : '';
  return (
    <a className={`nav-link ${activeClass}`}
      id={`v-pills-${id}-tab`}
      data-toggle="pill"
      href={`#v-pills-${id}`}
      role="tab"
      aria-controls={`v-pills-${id}`}
      aria-selected={active ? true : false}
      onClick={setActive(id)} >
      {title}
    </a>
  );
}

export default Navlink;
