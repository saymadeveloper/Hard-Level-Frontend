import React, {useEffect} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Carsusel from './Carousel'
const UserPage = () => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
 useEffect(() => { 
        if(!isLoggedIn){
          history.push("/");
        }
      }, [])
    return (
        <div>
            <Navbar />
            <Carsusel />
            <Footer />
        </div>
    )
}

export default UserPage