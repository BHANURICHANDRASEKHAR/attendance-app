import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Auth from './Auth';
import { useSelector,useDispatch } from 'react-redux';
import { LoginActions } from '../../Store/Loginslice';
function Example() {
    const show=useSelector((state)=>state.Loginslice.loginstatus)
    
    const dispatch=useDispatch()
    // const handleClose=()=>{
    //     dispatch(LoginActions.setlogout())
    // }
  return (
    <React.Fragment>
      <Modal show={show} >  
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><Auth/></Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default React.memo(Example);