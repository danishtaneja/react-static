import React, {Component} from 'react'
import QRCode from 'qrcode.react'
import {Link} from 'react-router-dom'
import { Footer } from '../components/Footer';

class Data extends Component{
    render(){
        return (
            <>
            <div className='text-center parent'style={{backgroundImage:'linear-gradient(#0d6efd, white)'}}>
            <h1 className='fst-italic' style={{ color:'white', fontWeight:'Bold',fontSize:'66px', marginBottom:'20px'}} > Welcome to Danish PORTFOLIO</h1>
            <p style={{fontSize:'2.0rem', fontWeight:'light', color:'white', marginTop:'60px'}}>Scan to view my PORTFOLIO</p>
            <QRCode value="http://localhost:3000/main" style={{width:'200px', height:'200px', border:'1px solid white'}} />
            <br/>
            <Link to="/main" style={{fontSize:'2.0rem', textDecoration:'none', borderRadius:'20px'}}>Click on me.</Link>
            {/* <hr style={{marginBottom:'0.6px'}}/> */}
            </div>
            <Footer />
            </>
        )
    }
}

export default Data;


// color:'#15A3C7'