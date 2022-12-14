import React from 'react'
import { useHistory } from "react-router-dom";
export default function SignIn ({ show, onHide}){
  const history = useHistory();
  const handleSignIn = () =>{
    history.push("/user-page");
  }
    return (
        <div class="modal fade" id="signIn" tabindex="-1" aria-labelledby="signInLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body ">
                <div className='d-flex justify-content-end mt-3'>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                <img src='/images/logo.png' height="62px" />
                </div>
                <h6 className='text-center mt-5 text-danger'>SIGN IN</h6>
                <div className='p-5 pt-0'>
                <div className='mt-3'>
                    <input type="email" placeholder='Username or Email address' id="signInEmail" name="email" className='form-control' />
                </div>
                <div className='mt-2'>
                    <input type="password" placeholder='Password' id="signInPassword" name="password" className='form-control' />
                </div>
                <div className='mt-2'>
                    <a href="" type="button" class="btn btn-danger text-white p-2 w-100" onClick={handleSignIn}>SIGN IN</a>
                </div>
                <div className='text-end mt-3'>
                <span><a href='#' className='text-danger'>Need help signing in?</a></span>
                </div>
                <div className='border-bottom mt-5'></div>
                <div className='mt-5'>
                    <button type="button" class="btn border p-2 w-100" data-bs-dismiss="modal" aria-label="Close">CREATE AN ACCOUNT</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
