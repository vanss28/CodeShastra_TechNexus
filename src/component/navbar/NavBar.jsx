import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import './NavBar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const history = useNavigate(); // Initialize useNavigate

  // Function to logout
  const logout = () => {
    // Remove access token from local storage
    localStorage.removeItem('accessToken');
    // Redirect to the sign-in page
    history('/signin');
  };

  // Function to check if the user is logged in
  const isLoggedIn = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken;
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {isLoggedIn() ? (
          <div className="gpt3__navbar-links_container">
            {/* Your authenticated links */}
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Power Of AI</a></p>
            <p><a href="#possibility">Explore</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#blog">Blogs</a></p>
           
          </div>
        ) : (
          <div className="gpt3__navbar-links_container">
            {/* Links to show when not authenticated */}
          </div>
        )}
      </div>
      <div className="gpt3__navbar-sign">
        {isLoggedIn() ? (
          // Show logout if logged in
          <div>
            <button type="button" onClick={logout}>Logout</button>
          </div>
        ) : (
          // Show sign in and sign up if not logged in
          <div className='navbarbuttons'>
            <Link to="/signin" className="navbar-link"><p>Sign in</p></Link>
            <Link to="/signup" className="navbar-link"><button type="button">Sign up</button></Link>
          </div>
        )}
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            {/* Repeat the isLoggedIn check here for mobile menu */}
            {isLoggedIn() ? (
              <>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">Maps</a></p>
                <p><a href="#possibility">Calendar</a></p>
                <p><a href="#features">Diary</a></p>
                <p><a href="#blog">Mail</a></p>
                <p><a href="#news">News</a></p>
              </>
            ) : (
              <p>Title</p>
            )}
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            {isLoggedIn() ? (
              // Show logout or profile options
              <div>
                <p>User Profile</p>
                <button type="button" onClick={logout}>Logout</button>
              </div>
            ) : (
              // Show sign in and sign up options
              <div className='navbarbuttons'>
                <Link to="/signin" className="navbar-link"><p>Sign in</p></Link>
                <Link to="/signup" className="navbar-link"><button type="button">Sign up</button></Link>
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
