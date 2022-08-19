import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <section className="section">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <nav className="nav">
        <ul className="menuUl">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="links">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>

  );
};
export default Nav;
