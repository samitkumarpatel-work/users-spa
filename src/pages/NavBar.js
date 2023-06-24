import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-house h2"></i>
          </Link>
          
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
  )
}

export default NavBar