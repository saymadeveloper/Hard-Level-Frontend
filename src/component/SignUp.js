import React, { useState } from 'react'
import { showError, showSuccess } from "../pages/Alert";
import axios from 'axios';
const SignUp = () => {
    const fields = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }
    const [inputs, setInputs] = useState(fields);
    const handlShowPassword = () => {
        let getId = document.getElementById('password');
        if (getId.type === "password") {
            getId.type = "text";
        } else {
            getId.type = "password";
        }
    }

    const save = () => {
        const URL = `${process.env.REACT_APP_API_URL}/user/sign-up`;
        axios.post(URL, inputs).then(response => {
            if (response.data.status === 200) {
                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                showSuccess(response.data.message);
                history.push("/");
            } else {
                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                showError(response.data.message);
                history.push("/signup");
            }
        }).catch(err => {
            showError(err);
        });
    }
    return (
        <div class="modal fade" id="signUp" tabindex="-1" aria-labelledby="signUpLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body ">
                        <div className='d-flex justify-content-end mt-3'>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='d-flex justify-content-center mt-5'>
                            <img src='/images/logo.png' height="62px" />
                        </div>
                        <h6 className='text-center mt-5 text-danger'>CREATE YOUR ACCOUNT</h6>
                        <div className='p-5 pt-0'>
                            <div className='mt-3'>
                                <input type="text" placeholder='First name' id="firstName" name={inputs.firstName} className='form-control' 
                                onChange={
                                    (event) = (event) => {
                                        setInputs({ ...inputs, "firstName": event.target.value })
                                    }
                                } />
                            </div>
                            <div className='mt-2'>
                                <input type="text" placeholder='Last name' id="lastName" name={inputs.lastName} className='form-control'
                                onChange={
                                    (event) = (event) => {
                                        setInputs({ ...inputs, "lastName": event.target.value })
                                    }
                                }
                                 />
                            </div>
                            <div className='mt-2'>
                                <input type="email" placeholder='Email address' id="email" name={inputs.email} className='form-control' 
                                onChange={
                                    (event) = (event) => {
                                        setInputs({ ...inputs, "email": event.target.value })
                                    }
                                }
                                />
                            </div>
                            <div className='mt-2'>
                                <input type="password" placeholder='Password' id="password" name={inputs.password} className='form-control' 
                                onChange={
                                    (event) = (event) => {
                                        setInputs({ ...inputs, "password": event.target.value })
                                    }
                                }/>
                                <input type="checkbox" className='mt-3' onClick={handlShowPassword} />Show Password
                            </div>
                            <div className='mt-2'>
                                <button type="button" class="btn btn-danger text-white p-2 w-100" onClick={save} data-bs-dismiss="modal" aria-label="Close">CREATE AN ACCOUNT</button>
                            </div>
                            <div className='border-bottom mt-5'></div>
                            <div className='text-center mt-3'>
                                <span>Already have an account?<button type="button" class="btn text-danger" data-bs-dismiss="modal" aria-label="Close"><u>Sign In</u></button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp