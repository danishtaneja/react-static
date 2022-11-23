import React from 'react'

export const Projects = () => {
    const imgstyle = {
        borderRadius:'40px',
    }
    const pstyle = {
        textAlign:'justify',
        fontSize:'20px'
    }
const hrstyle={
    height: .5,
}
  return (
    <>
    <div className="container-fluid py-2" id='myProject'>
        <h1 style={{color:'#0d6efd'}}>Projects</h1>
        <div className='row m-3 my-5 '>
    <div className='col-md-3'>
        <div className='text-center'>
        <p className='fs-5 fw-bold m-2' style={{color:'#0d6efd'}}>Project 1</p>
        <img src='./uploads/PORTFOLIO.png' alt='' className='img-fluid' style={{width:'500px', height:'150px'}}/>
        <p className='fs-5 fw-bold m-2'>Danish PORTFOLIO</p>
        </div>
    </div>
    <div className='col-sm-2'>

    </div>

    <div className='col-md-7 justify-content fst-italic my-2' id="" style={pstyle}>
    <p className='fw-bold fs-4'>Description</p>
    Danish PORTFOLIO is my personal PORTFOLIO website. Which provides the information about me, my Education, my skills and my projects. In this project I also embbed the QR Code on Home Page. when users scan the QR Code they'll get Link to Visit on my PORTFOLIO website.
    <div className='row mx-2 mt-2'>
        <table className="table table-borderless">
            <thead>
                <tr>
                <th>Project Status:</th>
                <td><span className='text-success fw-bolder' title='click on me..'>ACTIVE</span></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">URL:</th>
                <td><span className='text-danger'><a href='/main' alt='' target={'_blank'} rel='noreferrer'  style={{textDecoration:'none'}}>Click me</a></span></td>
                </tr>
                {/* <tr>
                <th scope="row">Video Link:</th>
                <td>Jacob</td>
                </tr>
                <tr>
                <th scope="row">Comments:</th>
                <td>Jacob</td>
                </tr> */}
                <tr>
                <th scope="row">Created In:</th>
                <td><span className='text-secondary' title='click on me..'>Februray 2022</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </div>
    <hr style={hrstyle}/>
        <div className='row m-3 my-2'>
    <div className='col-md-4'>
        <div className='text-center'>
        <p className='fs-5 fw-bold m-2' style={{color:'#0d6efd'}}>Project 2</p>
        <img src='./uploads/my PORTFOLIO.png' alt='' className='img-fluid' style={{width:'500px', height:'200px'}}/>
        <p className='fs-5 fw-bold m-2'>my PORTFOLIO maker</p>
        </div>
    </div>
    <div className='col-sm-1'>

    </div>
    <div className='col-md-7 justify-content fst-italic my-2' id="" style={pstyle}>
    <p className='fw-bold fs-4'>Description</p>
    my PORTFOLIO maker is mine one of the above average project than others. This project is secure and authenticated. In this Project user can create their PORTFOLIO by signup with their details.
    when their account is successfully created. They can login in their account with the help of email and password. In which the user can add their Introduction, Summary, Education, Skills, Experience, Projects in it.
    After user successfully added their whole details n everything init. User's can also see their PORTFOLIO live view by click on the Live View link.
    However, user can share their live view link or they can also add their PORTFOLIO live view link in the Resume or CV.
    <div className='row mx-2 mt-2'>
    <table className="table table-borderless">
            <thead>
                <tr>
                <th>Project Status:</th>
                <td><span className='text-danger' title='click on me..'>NOT ACTIVE</span></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">URL:</th>
                <td><span className='text-danger'>Not AVAILABLE</span></td>
                </tr>
                <tr>
                <th scope="row">Video Link:</th>
                <td> <span className='text-danger'>NOT AVAILABLE</span></td>
                </tr>
                <tr>
                <th scope="row">Comments:</th>
                <td><span className='text-primary fs-6 fw-bolder'>This project is not on domain.</span></td>
                </tr>
                <tr>
                <th scope="row">Created In:</th>
                <td><span className='text-secondary' title='click on me..'>January 2022</span></td>
                </tr>
            </tbody>
        </table>
   </div>
    </div>
    </div>
    <hr style={hrstyle} />    <div className='row m-3 my-2'>
    <div className='col-md-4'>
        <div className='text-center'>
        <p className='fs-5 fw-bold m-2' style={{color:'#0d6efd'}}>Project 3</p>
        <img src='./uploads/PAC.png' alt='' className='img-fluid' style={{width:'50s0px', height:'250px'}}/>
        <p className='fs-5 fw-bold m-2'>Project Allocation Center</p>
        </div>
    </div>
    <div className='col-sm-1'>

    </div>
    <div className='col-md-7 justify-content fst-italic my-2' id="" style={pstyle}>
    <p className='fw-bold fs-4'>Description</p>
   <p className='text-danger fw-bold'>Description of this project is Not Avaliable currently...</p>
    <div className='row mx-2 mt-2'>
    <table className="table table-borderless">
            <thead>
                <tr>
                <th>Project Status:</th>
                <td><span className='text-danger' title='click on me..'>NOT ACTIVE</span></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">URL:</th>
                <td><span className='text-danger'>Not AVAILABLE</span></td>
                </tr>
                <tr>
                <th scope="row">Video Link:</th>
                <td> <span className='text-danger '>NOT AVAILABLE</span></td>
                </tr>
                <tr>
                <th scope="row">Comments:</th>
                <td><span className='text-primary fw-bolder'>This is my one of the Major Project and this project is successfully complete. <br />But this project is not on domain.</span></td>
                </tr>
                <tr>
                <th scope="row">Created In:</th>
                <td><span className='text-secondary' title='click on me..'>October 2021</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </div>
    <hr style={hrstyle} />
    <div className='row m-3 my-2'>
    <div className='col-md-3'>
        <div className='text-center'>
        <p className='fs-5 fw-bold m-2' style={{color:'#0d6efd'}}>Project 4 </p>
        <img src='./uploads/figma.png' alt='' className='img-fluid' style={imgstyle}/>
        <p className='fs-5 fw-bold m-2'>Figma Linkedin Prototype</p>
        </div>
    </div>
    <div className='col-sm-2'>

    </div>
    <div className='col-md-7 justify-content fst-italic my-2' id="" style={pstyle}>
    <p className='fw-bold fs-4'>Description</p>
    <p>Linkedin Prototype is a minor prototype project created in Figma. In this project I used Linkedin Application as an example. In which i made some changes in the view of Linkedin mobile application. when user click on their profile icon then the user can see the change in the interface of side navigation bar. 
    After that, when user click on the view button then the user can see the changes of profile section.</p>
    <div className='row mx-2 mt-2'>
    <table className="table table-borderless">
            <thead>
                <tr>
                <th>Project Status:</th>
                <td><span className='text-success' title='click on me..'> ACTIVE</span></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">URL:</th>
                <td><span className='text-danger'><a href='https://www.figma.com/proto/UuqDDmcSmUQdLnROXDkHWB/Linkedin-Prototype?page-id=0%3A1&node-id=16%3A3409&viewport=241%2C48%2C0.27&scaling=scale-down&starting-point-node-id=20%3A3544' target={'_blank'} rel="noreferrer" style={{textDecoration:'none'}}>Click me</a></span></td>
                </tr>
                <tr>
                <th scope="row">Video Link:</th>
                <td> <span className='text-danger'>NOT AVAILABLE</span></td>
                </tr>
                {/* <tr>
                <th scope="row">Comments:</th>
                <td><span className='text-primary fs-6 fw-bolder'>This project is not on domain.</span></td>
                </tr> */}
                <tr>
                <th scope="row">Created In:</th>
                <td><span className='text-secondary' title='click on me..'>Februray 2022</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </div>
    </div>
    <hr style={hrstyle}/>

    </> 
  )
}