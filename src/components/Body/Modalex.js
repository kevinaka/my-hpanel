import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import {BsFillPencilFill} from 'react-icons/bs';

const Modalex = () => {
  

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div className="mode">
        <Button className=" relative reg-btn bg-transparent focus:outline-none shadow-none border-none" 
         onClick={handleShow}>
    
        <span className=" btn-cover w-auto d-flex ">
         <span className='reg-button'>
          Register to join <span className='join'>
          the group</span>
         </span> 
         <span className='mx-3 pen'>
          <BsFillPencilFill/>
         </span>
        </span>
    
        </Button>
  
        <Modal show={show} onHide={handleClose} centered 
         className="card-body p-4 modes p-sm-5 P-5 card-registration">
          <Modal.Header className="modehead" closeButton>
            <Modal.Title className='modet'>
            
            <h5 className="card-title text-light text-center mb-5 fw-light fs-5">Register</h5>
                </Modal.Title>
          </Modal.Header>


<Modal.Body className="bg-dark">      
     <form className="mt-n2">
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInputUsername"
                placeholder="myusername" required autofocus />
            <label for="floatingInputUsername">Username</label>
        </div>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInputEmail"
                placeholder="name@example.com" />
            <label for="floatingInputEmail">Email address</label>
        </div>
        <hr />
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword"
                placeholder="Password" />
            <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPasswordConfirm"
                placeholder="Confirm Password" />
            <label for="floatingPasswordConfirm">Confirm Password</label>
        </div>
        <div className="d-grid mb-2">
            <button className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                type="submit">Register</button>
        </div>
        <a className="d-block text-center mt-2 small" href="#">Have an account? Sign In</a>
        <hr className="my-4" />
        <div className="d-grid mb-2">
            <Button style={{
             color: 'white !important',
             backgroundColor: '#ea4335',
             border:'none !important', maxWidth:'100px !important'
            }} 
            
            className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
            <i class="bi bi-google me-2">
                </i>Sign up with Google
            </Button>
        </div>
        <div className="d-grid">
            <Button  style={{  
            color: 'white !important',
            backgroundColor: '#3b5998',
             }} 
            
            className="btn btn-lg    btn-facebook btn-login fw-bold text-uppercase"
                type="submit">
                 <i class="bi bi-facebook me-2">
                    </i>Sign up with Facebook
            </Button>
        </div>
    </form>  


    </Modal.Body>


          <Modal.Footer>
          <div className="modal-footer">
          <Button variant="danger btn-lg" onClick={handleClose}>
              Close
            </Button>
           </div>

           
           
          </Modal.Footer>
        </Modal>
      </div>
    );
  
 }

export default Modalex