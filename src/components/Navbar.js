import React from 'react'
import logo from '../images/logo.svg'
import { pagelinks,sociallinks } from './data'
function Navbar() {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* <!-- left this comment on purpose --> */}
      <ul className="nav-links" id="nav-links">
       {
        pagelinks.map((links)=>
        {
          return(
            <li key={links.id}>
            <a href={links.href} rel="noreferrer" className="nav-link"> {links.text} </a>
           </li>
          )
        })}
      </ul>

      <ul className="nav-icons">
        {
          sociallinks.map((links)=>{
            const {id,href,icon} = links
            return(

              <li key={id}>
                  <a href={href} rel="noreferrer" target="_blank" className="nav-icon">
                      <i className={icon}></i>
                  </a>
              </li>
            )
          })
        }
      
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
