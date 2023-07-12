import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './navbar.css';
import CarBookingForm from './CarBookingForm';

export default function Land() {
  return (
    <div>
      <Navbar />
      <div className='land'>
        <h1>Last Minute Appoinments Available!</h1>
      
        <CarBookingForm />
        </div>
        <br/><br/><br/><br/>
       
          
          <br />
        </div>
     
  
  );
}
