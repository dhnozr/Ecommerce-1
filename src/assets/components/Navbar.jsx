import React from 'react';

export default function Navbar() {
  const categories = ['All', 'Electronics', 'Sport', 'SelfCare'];

  // render ul list
  const renderList = categories.map(x => {
    return (
      <li key={x}>
        <a href="#">{x}</a>
      </li>
    );
  });

  // navbar component
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h1>Logo</h1>
      </div>
      <ul className="nav-list">{renderList}</ul>
      <div className="nav-search">
        <input className="search-bar" type="text" />
        <img className="search-icon" src="/public/search.svg" alt="" />
      </div>
    </nav>
  );
}
