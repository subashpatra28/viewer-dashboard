import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Template.css';
import Profile from './Profile.png';
import Logo from './Honda.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <h4 value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <div className="Nav">
            <h4 onClick={showSidebar} className="Menu" >&#x2630;</h4>
            
            </div>
          </Link>
            <div  className="Logo" ><img src={Logo} style={{width:"40px", height:"45px"}} /></div>
            <div  className="profile" ><img src={Profile} style={{width:"40px", height:"45px"}} /></div>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <h4 >Close</h4>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </h4>
    </>
  );
}

export default Navbar;