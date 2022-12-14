import React from 'react'

const Footer = () => {
    return (
        <div className='navbar-bg mt-5'>
            <div className='container'>
                <div className='row pt-5 pb-5'>
                    <div className='col-xl-6 d-flex g-0 flex-wrap justify-content-between'>
                        <div>
                            <img src='/images/footer-m.png' className='m-3 mt-0 mb-0' height="100%" />
                        </div>
                        <div>
                            <ul className='footer-list'>
                                <li><a href="#">About Marvel </a></li>
                                <li className='mt-1'><a href="#">Help/FAQs</a></li>
                                <li className='mt-1'><a href="#">Careers</a></li>
                                <li className='mt-1'><a href="#">Internships</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='footer-list'>
                                <li><a href="#">Advertising</a></li>
                                <li className='mt-1'><a href="#">Disney+</a></li>
                                <li className='mt-1'><a href="#">Marvelhq.com</a></li>
                                <li className='mt-1'><a href="#">Redeem Digital Comics</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-6 d-flex flex-wrap justify-content-between'>
                        <div className='mt-4'>
                            <div className='d-flex'>
                                <div>
                                    <img src='/images/footer-in.png' className='m-3 mt-0 mb-0' height="30px" />
                                </div>
                                <div>
                                    <h5 className='text-white'>Marvel Insider</h5>
                                    <span className='text-muted'>Get Rewarded for Being a Marvel Fan</span>
                                </div>
                            </div>
                            <div className='d-flex mt-5'>
                                <div>
                                    <img src='/images/footer-u.png' className='m-4 mt-0 mb-0' height="35px" />
                                </div>
                                <div>
                                    <h5 className='text-white'>Marvel Unlimited</h5>
                                    <span className='text-muted'>Access Over 30,000+ Digital Comics</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-white'>Follow Marvel</h5>
                            <div className='mt-3'>
                                <span className='margin'><i class="bi bi-facebook text-white fs-4 "></i></span>
                                <span className='margin'><i class="bi bi-twitter text-white fs-4"></i></span>
                                <span className='margin'><i class="bi bi-instagram text-white fs-4"></i></span>
                                <span className='margin'><i class="bi bi-messenger text-white fs-4"></i></span>
                            </div>

                            <div className='mt-3'>
                                <span className='margin'><i class="bi bi-youtube text-white fs-4"></i></span>
                                <span className='margin'><i class="bi bi-snapchat text-white fs-4"></i></span>
                                <span className='margin'><i class="bi bi-pinterest text-white fs-4"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container d-flex justify-content-center'>
                <div className='pt-3'>
                    <ul class="copy-list-inline">
                        <li><a href="#" >Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Your California Privacy Rights</a></li>
                        <li><a href="#" >Do Not Sell My Personal Information</a></li>
                        <li><a href="#">Children's Online Privacy Policy</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">License Agreement</a></li>
                        <li><a href="#">Interest-Based Ads</a></li>
                    </ul>
                </div>
            </div>
            <div className='container d-flex justify-content-center'>
                <ul class="copy-list-inline">
                    <li><a href="#">Marvel Insider Terms</a></li>
                    <li className='text-white'>©2022 MARVEL</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer