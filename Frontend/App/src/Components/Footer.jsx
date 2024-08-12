import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function App() {
  return (
    <MDBFooter className='bg-light text-center text-white mb-2'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 icons'>
        <a href='https://github.com/BHANURICHANDRASEKHAR'><IoLogoGithub /></a> 
        <a href='https://www.linkedin.com/in/bhanuri-chandrasekhar-975988239/'
        ><FaLinkedinIn /></a> 
        <a  href='mailto:bhanurichandu@gmail.com'><FcGoogle /></a> 
        </section>
      </MDBContainer>

      <div className='text-center p-2 text-bg-primary ' >
       <h6> © Chandu Bhanuri</h6>
      </div>
    </MDBFooter>
  );
}