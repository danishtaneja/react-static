import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashLink as Link} from 'react-router-hash-link'

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg p-2 sticky-top fs-5 text-center shadow-lg p-3 bg-white rounded" >
     <Link smooth className="navbar-brand fs-2 fw-bold" to="#">Danish PORTFOLIO</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <i className="fas fa-bars fs-2" style={{color:'#0d6efd'}}></i>
  </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ps-2 fs-4 w-100 justify-content-end fst-italic">
          <li className="nav-item active">
           <Link smooth className="nav-link " to="#profile">myProfile</Link>
           </li>
            <li className="nav-item">
           <Link smooth className="nav-link " to="#education">myEducation</Link>
            </li>
            <li className="nav-item">
             <Link smooth className="nav-link " to="#skills">mySkills</Link>
            </li>
            <li className="nav-item">
               <Link smooth className="nav-link " to="#myProject">myProjects</Link>
            </li>
            {/* <li className="nav-item">
               <Link smooth className="nav-link " to="#contact">myContact</Link>
            </li> */}
        </ul>
      </div>
  </nav>
</>
  )
}
