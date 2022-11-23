import React from 'react'
import '../App.css'

export const Footer = () => {
  return (
    <>
    <footer className="footer" style={{backgroundImage:'linear-gradient(to top,#0d6efd, white)'}}>
        <div className="icons">
           <a href="https://www.facebook.com/" ><i className="fab fa-facebook"></i></a>
           <a href="https://www.linkedin.com/"  ><i className="fab fa-linkedin"></i></a>
           <a href="https://www.instagram.com/" ><i className="fab fa-instagram"></i></a>
           <a href="https://github.com/" ><i className="fab fa-github"></i></a>
           <a href="https://twitter.com/" ><i className="fab fa-twitter"></i></a>
            <p className="company-name text-white fw-lighter">
                Created By: Danish TANEJA, &#64;2022
            </p>
        </div>
    </footer>
    </>
  )
}
