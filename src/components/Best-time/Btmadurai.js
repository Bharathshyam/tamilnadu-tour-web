import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';

const Btmadurai = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <section>
      




      <div className='container'>
      <div className='row'>
      


      <div className='col-7'>
        <h2 className='py-3'>01.Chennai</h2>
        <h4 className='py-3'>What is Best Time To Visit</h4>
      <p className='' >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.<br></br><br></br>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available </p>
  
      </div>
  
  
      <div className='col-5'>
      <div className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>More About Best Time To Travel Chennai</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <div className='box text-center' style={{width:"80%",alignItems:"center",marginLeft:"10%"}}>
            <div className='row'>
              <div className='col-4'>
                <img src={require("../Gallery/chennai1.jpeg")} alt='i' className='img-fluid'/>
                <p className='text-center'>Chennai<br></br>India<br></br>Source</p>
              </div>

              <div className='col-4'>
                <img src={require("../Gallery/chennai2.jpeg")} alt='i' className='img-fluid'/>
                <p className='text-center'>Chennai<br></br>India<br></br>Source</p>
              </div>

              <div className='col-4'>
                <img src={require("../Gallery/chennai3.jpeg")} alt='i' className='img-fluid'/>
                <p className='text-center'>Chennai<br></br>India<br></br>Source</p>
              </div>

            </div>

            </div>
            
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleShow}>Save changes</Button>
            <Offcanvas show={show} onHide={handleClose} placement='start'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Best Time To Visit</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
          </Offcanvas.Body>
        </Offcanvas>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
  
  
      </div>
  
        </div>

      </div>



      
    
    </section>
  )
}

export default Btmadurai