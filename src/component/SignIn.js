import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { showError, showSuccess } from "../pages/Alert";
import axios from 'axios';
export default function SignIn (){
  const history = useHistory();
  const fields = {
    email: "",
    password: "",
}
const [inputs, setInputs] = useState(fields);
  const save = () => {
    const URL = `${process.env.REACT_APP_API_URL}/user/sign-in`;
        axios.post(URL, inputs).then(response => {
            if (response.data.status === 200) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("isLoggedIn", true);
                showSuccess(response.data.message);
                
                history.push("/user-page");
            } else {
                document.getElementById("signInEmail").value = "";
                document.getElementById("signInPassword").value = "";
                showError(response.data.message);
                history.push("/signup");
            }
        }).catch(err => {
            showError(err);
        });
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
                    <input type="email" placeholder='Email address' id="signInEmail" name={inputs.email} className='form-control' 
                      onChange={
                        (event) = (event) => {
                            setInputs({ ...inputs, "email": event.target.value })
                        }
                    }
                    />
                </div>
                <div className='mt-2'>
                    <input type="password" placeholder='Password' id="signInPassword" name={inputs.password} className='form-control'
                    onChange={
                      (event) = (event) => {
                          setInputs({ ...inputs, "password": event.target.value })
                      }
                  }
                    />
                </div>
                <div className='mt-2'>
                    <button  type="button" class="btn btn-danger text-white p-2 w-100" onClick={save}>SIGN IN</button>
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
