import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar-bg'>
            <div className='border-bottom-color'>
                <div class="d-flex container justify-content-between text-white">
                    <div className='border-both-color p-3 pb-0'>
                        <ul class="list-inline">
                            <li>
                                <a href="#" >
                                    <img src='/images/logo-in.png' className='m-3 mt-0 mb-0' height="30px" />
                                    SIGN IN
                                </a>
                            </li>
                            <li className='mt-1'><a href="#">|</a></li>
                            <li className='mt-1'><a href="#">JOIN</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src='/images/logo.png' height="62px" />
                    </div>
                    <div className='d-flex p-3 pb-0'>
                        <div className='d-flex flex-wrap border-both-color'>
                            <span><img src='/images/logo-i.png' height="30px" /></span>
                            <span className='text-center'>
                                <span>Marvel Unlimited</span><br />
                                <span>Subscribe</span>
                            </span>
                        </div>
                        <div className=' p-3 pt-0 pb-0'>
                        <span>
                        <i class="bi bi-search fs-4"></i>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
            <div className='container d-flex justify-content-center'>
                <div className='pt-3'>
                <ul class="list-inline">
                    <li><a href="#" >News</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#" >Movies</a></li>
                    <li><a href="#">TV Shows</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">More</a></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar