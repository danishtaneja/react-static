import React, { useState } from 'react'
import '../Contact.css'
import {db} from '../firestore/config'
import {addDoc, collection} from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const Contact2 = () => {
  const history = useHistory();
  // const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, 'Danish_PORTFOLIO');
  // console.log(process.env.REACT_APP_STORAGE_BUCKET)
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState(0);
  const [newMessage, setMessage] = useState('');
  const [newSubject, setNewSubject] = useState('');

  const sendMessage = async () =>{
    try{
      if(newName===''|| newEmail ==='' || newPhone===''|| newSubject==='' || newMessage===''){
        toast.warn('Please fill your form correctly..',{
          position:'top-center',
          autoClose: 500,
          pauseOnHover:false
        })
      }
      else{
        await addDoc(userCollectionRef, {Name:String(newName), Email:newEmail, Phone:Number(newPhone),Subject:String(newSubject), Message:newMessage}, toast.success('Message sent successfully....',{position:'top-center', autoClose: 500}));
        history.push('/')
      }
    }
    catch(e){
      console.error(e);
    }
  }

  return (
    <>
    
<ToastContainer />

<div className='container-fluid table-responsive overflow-hidden'>
  <h1 style={{color:'#0d6efd'}}>Contact</h1>
  <footer id="footer">
			<div className="container">
				<div className="row">
        <div className="col-md-3 text-center">
						<div className="address my-3">
							<h2>Address</h2>
							<div className="address-links text-start">
								<li className='address' style={{textDecoration:'none'}}><i className="fas fa-map-marker-alt"></i><span>Canberra, Australia</span></li>
								   <li className='address' ><a href='tel:+61432455582' style={{textDecoration:'none', fontSize:'16px', color:'black'}}><i className='fas fa-phone' /><span>(+61)</span>&nbsp;<span>0432 455 582</span></a></li>
								   <li className='address' > <a href='mailto:danishtaneja200@gmail.com' style={{textDecoration:'none', fontSize:'16px', color:'black'}}><i className='fas fa-envelope' /><span>danishtaneja200@gmail.com</span></a></li>
							</div>
						</div>
					</div>
        <div className="col-md-3 text-center">
						<div className="Quick-link my-3">
							<h2>Quick Links</h2>
							<div className="Quick-Links">
								<li><a href="/main"><i className="fas fa-angle-right"></i> Home</a></li>
                <li><a href="#profile"><i className="fas fa-angle-right"></i>Profile</a></li>
								<li><a href="#education"><i className="fas fa-angle-right"></i> Education</a></li>
								<li><a href="#skills"><i className="fas fa-angle-right"></i> Skills</a></li>
								<li><a href="#myProject"><i className="fas fa-angle-right"></i> Projects</a></li>
							</div>
						</div>
					</div>
          <div className="col-md-6" >
          <h2 style={{fontSize: "20px", fontWeight:'600', paddingTop:'15px', textAlign:'center'}}>Get in Touch</h2>
      <div className="container-fluid formset" >
      {/* <form method='POST' action='/main'> */}
        <div className='col-md-6' >
      <div className="form-group">
        <input type="text" className="form-control" onChange={(e)=>{setNewName(e.target.value)}}  required/>
        <label className="form-control-placeholder" htmlFor="name">Name</label>
      </div>
      <div className="form-group">
        <input type="email" className="form-control" onChange={(e)=>{setNewEmail(e.target.value)}} required/>
        <label className="form-control-placeholder" htmlFor="email">Email</label>
      </div>
      <div className="form-group">
        <input type="number" className="form-control" onChange={(e)=>{setNewPhone(e.target.value)}} required/>
        <label className="form-control-placeholder" htmlFor="phone">Phone</label>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" onChange={(e)=>{setNewSubject(e.target.value)}} required/>
        <label className="form-control-placeholder" htmlFor="phone">Subject</label>
      </div>
      <div className="form-group">
      {/* <label htmlFor='message'>Message</label> */}
        <textarea type="text" rows='3' cols="45" placeholder='Message...' onChange={(e)=>{setMessage(e.target.value)}} required></textarea>
      </div>
      <div className=''>
        <button className='btn btn-primary' onClick={sendMessage} >Send</button>
        </div>
      </div>
      {/* </form> */}
      </div>
      </div>
          <div className="col-md-12">
            <h2 className="text-center m-4">Follow me on...</h2>
            <hr style={{border:'1px solid black', marginTop:'20px', marginBottom:'20px'}} />
            <div className="social-links">
                <div className='col-sm-2' id="social">
                <a href="https://www.facebook.com/" target='_blank' rel='noreferrer' ><i className="fab fa-facebook"></i></a>
                </div>
                <div className='col-sm-2' id="social">
                  
                <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer'  ><i className="fab fa-linkedin"></i></a>
                </div>
                <div className='col-sm-2'  id="social">           
                <a href="https://www.instagram.com/" target='_blank' rel='noreferrer' ><i className="fab fa-instagram"></i></a>
                </div>
                <div className='col-sm-2'  id="social">
                  <a href="https://github.com/" target='_blank' rel='noreferrer' ><i className="fab fa-github"></i></a>
                </div>
                <div className='col-sm-2'  id="social">
                  <a href="https://twitter.com/" target='_blank' rel='noreferrer' ><i className="fab fa-twitter"></i></a>
                </div>
						</div>
              <hr style={{border:'1px solid black', marginTop:'20px', marginBottom:'20px'}} />
            </div>
                  
				</div>
			</div>

		</footer>
		<section id="copy-right">
			<div className="copy-right-sec">  
      Created By: Danish TANEJA, @2022
			</div>
		</section>
</div>
    </>
  )
}

export default Contact2