import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Removed useNavigate import
import rfLogo from '../imgerack/rf.jpg';
import { Link } from 'react-router-dom';
// import Login from './login.jsx'; // Assuming Login is a function that handles login


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  


  return (
    <>
      <nav className="navbar border  border-t-2 border-lime-200" style={{ backgroundColor: '#07282C' }}>
        <div className="navbar-container">
          {/* Logo */}
          <img src={rfLogo} alt="RF Logo" style={{ height: '50px', width: '52px', objectFit: 'cover', borderRadius: '10px', marginRight: '1rem', background: '#fff', padding: '4px' }} />

          {/* Desktop Navigation */}
          <ul className="nav-menu" style={{ fontSize: '1.25rem' }}>
            <li className="nav-item">
              <Link to={"/"}>
              <p className='text-[18px] hover:text-[#2563eb] font-semibold text-white'>Home</p>
              </Link>
            </li>
            <li className="nav-item">
               <Link to={"/about"}>
              <p className='text-[18px] hover:text-[#2563eb] font-semibold text-white'>About</p>
              </Link>
            </li>
            <li className="nav-item">
              
               <Link to={"/service"}>
              <p className='text-[18px] hover:text-[#2563eb] font-semibold text-white'>Service</p>
              </Link>
            </li>
            <li className="nav-item dropdown" style={{ position: 'relative' }}>
              <Link to={"/"} className="nav-link" >
                <span>Pages</span>
                <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <ul className="dropdown-menu" style={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: 0,
                background: '#fff',
                color: '#222',
                minWidth: 180,
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                borderRadius: 8,
                padding: '0.5rem 0',
                zIndex: 1000,
                listStyle: 'none', // Remove bullet points
                margin: 0,
              }}>
                <li><a className="dropdown-link" href="/price">Pricing</a></li>
                <hr />
                <li><a className="dropdown-link" href="/blog">Blog</a></li>
                <hr />
                <li><a className="dropdown-link" href="/singal">Single Post</a></li><hr />
                <li><a className="dropdown-link" href="/morefaq">FAQ</a></li>
               
              </ul>
            </li>
             <li className="nav-item">
              <Link to={"/contact"}>
              <p className='text-[18px] hover:text-[#2563eb] font-semibold text-white'>Contact</p>
              </Link>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <Link to={"/login"}><button className="btn-link" >Login</button></Link>
            <button className="btn-link">Contact Sales</button>
            <button className="btn-primary">
              <span>Get started</span>
              <span className="btn-primary-text">— it's free</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-list">
            <li> <Link to={"/"}>
              <p className='text-[18px] hover:text-[#2563eb] font-semibold text-white'>Home</p>
              </Link></li>
              <li className="nav-item">
               <Link to={"/about"}>
              <p className='text-[18px] hover:text-[#2563eb] font-semibold text-white'>About</p>
              </Link>
            </li>
              <li className="mobile-nav-item">
                <a className="mobile-nav-link" href="/service">Service</a>
              </li>
              <li className="nav-item dropdown" style={{ position: 'relative' }}>
              <Link to={"/"} className="nav-link" >
                <span>Pages</span>
                <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <ul className="dropdown-menu" style={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: 0,
                background: '#fff',
                color: '#222',
                minWidth: 180,
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                borderRadius: 8,
                padding: '0.5rem 0',
                zIndex: 1000,
                listStyle: 'none', // Remove bullet points
                margin: 0,
              }}>
                <li><a className="dropdown-link" href="/price">Pricing</a></li>
                <hr />
                <li><a className="dropdown-link" href="/blog">Blog</a></li>
                <hr />
                <li><a className="dropdown-link" href="/singal">Single Post</a></li><hr />
                <li><a className="dropdown-link" href="/morefaq">FAQ</a></li>
               
              </ul>
            </li>
               <li className="nav-item">
              <Link to={"/contact"}>
              <p className='text-[18px] hover:text-[#2563eb] font-semibold text-white'>Contact</p>
              </Link>
            </li>
            </ul>

            <div className="mobile-actions">
              <Link to={"/login"}><button className="btn-link" >Login</button></Link>
              <button className="btn-link">Contact Sales</button>
              <button className="mobile-btn-primary">Get started — it's free</button>
            </div>
          </div>
        )}
      </nav>

      {/* Glow effect styles */}
      <style>{`
        .nav-link-glow {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: black;
          text-decoration: none;
          transition: box-shadow 0.2s, background 0.2s;
        }
        .nav-link-glow:hover {
          box-shadow: 0 0 12px 2px #7ecbff, 0 0 20px 4px #b3e5fc;
          background: #e3f6ff;
        }
        .nav-item.dropdown:hover .dropdown-menu {
          display: block !important;
        }
        .dropdown-menu li a {
          color: #222;
          text-decoration: none;
          display: block;
          padding: 0.5rem 1.5rem;
          transition: background 0.2s;
        }
        .dropdown-menu li a:hover {
          background: #f0f4ff;
          color: #2563eb;
        }
        .nav-link, .nav-link span, .btn-link, .btn-primary, .mobile-nav-link {
          color: #fff !important;
        }
        .nav-link:hover, .nav-link:focus, .nav-link span:hover, .btn-link:hover, .btn-link:focus, .mobile-nav-link:hover, .mobile-nav-link:focus {
          color: #2563eb !important;
        }
        .dropdown-menu li a {
          color: #222;
        }
        .dropdown-menu li a:hover {
          color: #2563eb;
        }
      `}</style>
    </>
  );
};

export default Navbar;