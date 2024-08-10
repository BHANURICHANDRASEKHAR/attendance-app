import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { WhatappSliceActions } from '../../Store/ShareWhatapp';
import { useNavigate } from 'react-router-dom';
import WhatAppBtn from './Transfer'
import Text from './Text'
function Example() {
  const ref=useRef();
  const handleCopy = () => {
    if (ref.current) {
        
        const htmlContent = ref.current.innerText || ref.current.textContent;
        return htmlContent;
    }
};
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const show=useSelector((state)=>state.WhatappSlice.flag);
  const handleClose = () => {dispatch(WhatappSliceActions.setFlagFalse()),navigate('/')};
  return (
    <React.Fragment>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Text ref={ref}/>
        <WhatAppBtn handleCopy={handleCopy}/>
    <br/>
     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Example;