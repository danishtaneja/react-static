import React from 'react'

export const Profile = () => {
    const imgstyle = {

    }
    const pstyle = {
        textAlign:'justify',
        fontSize:'2.4rem'
    }
  return (
    <>    
    <div className="container-fluid py-2" id="profile">
      <h1 style={{color:'#0d6efd'}}>Profile</h1>
    <div className='row m-3'>
    <div className='col-md-3'>
        <div className='text-center'>
        <img src='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png' alt='' className='img-fluid' width={"250px"} style={imgstyle} />
        <p className='fs-4 fw-bold m-2'>Danish Taneja</p>
        <p className='fs-4'>IT Graduate (FRESHER)</p>
        {/* <p className='fs-4'>Software Developer</p> */}
        </div>
    </div>
    <div className='col-sm-2'>

    </div>
        <div className='col-md-6 justify-content fst-italic my-5 fs-4' id="" style={pstyle}>
        Hi Everyone,<br/>
        I'm Danish Taneja. I'm an IT Graduate. I’m jotting you a quick note to let you know that, I’m currently searching for a new career opportunity in IT Company. With my background in Web Development, I’m ideally looking for a position to start my career to get an Experience in the IT Company. For a greater understanding of my qualifications and skills, I also added my work or my projects in this PORTFOLIO.
        <br />
        <details className='fs-5 my-3'>
          <summary >Read more</summary>
          The projects which i made and embbeded in this PORTFOLIO. I learned the skills requirements for those projects from YOUTUBE.
        </details> 
        </div>
    </div>
    </div>
    <hr />
    </>
  )
}
