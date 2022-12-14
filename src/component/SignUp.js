import React from 'react'

const SignUp = () => {
    const handlShowPassword = () => {
        let getId = document.getElementById('password');
        if (getId.type === "password") {
            getId.type = "text";
        } else {
            getId.type = "password";
        }
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
                                <input type="text" placeholder='First name' id="firstName" name="firstName" className='form-control' />
                            </div>
                            <div className='mt-2'>
                                <input type="text" placeholder='Last name' id="lastName" name="lastName" className='form-control' />
                            </div>
                            <div className='mt-2'>
                                <input type="email" placeholder='Email address' id="email" name="email" className='form-control' />
                            </div>
                            <div className='mt-2'>
                                <input type="password" placeholder='Password' id="password" name="password" className='form-control' />
                                <input type="checkbox" className='mt-3' onClick={handlShowPassword} />Show Password
                            </div>
                            <div className='mt-2'>
                                <button type="button" class="btn btn-danger text-white p-2 w-100" data-bs-dismiss="modal" aria-label="Close">CREATE AN ACCOUNT</button>
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