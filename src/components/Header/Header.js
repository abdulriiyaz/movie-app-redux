import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss'
import { RiSkull2Fill } from "react-icons/ri";

const Header = () => {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <RiSkull2Fill />
          </div>
        </Link>
        <div className="search-container">
          <input className="search" placeholder="Search..." />
        </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    );
}

export default Header
