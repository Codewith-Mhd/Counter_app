import {Component} from "react"

// Stateless Functional Component . ...
const Navbar = ({totaleCounters}) => {
  return (
    <div className="navbar">
      <div className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totaleCounters}
          </span>
        </a>
      </div>
    </div>
  )
}

export default Navbar
