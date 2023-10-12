// these are custom components we can use these components inside our app.js
// use rfc for creating a reactfunction component
import React from 'react'
import PropTypes from 'prop-types' //impt
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to = "/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to = "/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = "/about">{props.about}</Link>
        </li>
      </ul>
      {/* <div className="bg-primary rounded-circle mx-2" style={{height :'30px', width: '30px', border: 'solid white 2px',cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>
      <div className="bg-danger rounded-circle mx-2" style={{height :'30px', width: '30px', border: 'solid white 2px',cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>
      <div className="bg-success rounded-circle mx-2" style={{height :'30px', width: '30px', border: 'solid white 2px',cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
      <div className="bg-warning rounded-circle mx-2" style={{height :'30px', width: '30px', border: 'solid white 2px',cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>
      <div className="bg-light rounded-circle mx-2" style={{height :'30px', width: '30px', border: 'solid white 2px',cursor:'pointer'}} onClick={()=>{props.toggleMode('light')}}></div>
      <div className="bg-dark rounded-circle mx-2" style={{height :'30px', width: '30px', border: 'solid white 2px',cursor:'pointer'}} onClick={()=>{props.toggleMode('dark')}}></div> */}

        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
        </div>
          
    </div>
  </div>
</nav>
    
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired, //.isRequired ensures that u must specify the title (if default then no error)
    aboutME : PropTypes.string
}
// we can also set default props they are used when pros are not passed in App.js
Navbar.defaultProps = {
    title : "set title here",
    about : "About bhar do"
}
