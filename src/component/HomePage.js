import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
const HomePage = () => {

    return (
        <div>
            <Navbar />
            <div className='h-100 text-center text-danger fw-bolder p-5 carousel-div'>
                <h3>Please Sign In your account</h3>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage