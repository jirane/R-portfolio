import React from 'react'
import './index.scss'
import NotFoundIcon from '../../assets/images/404-error.png'
const NotFound = ()=>{
    return(
        <>
            <div className='notFound'>
                    <img src={NotFoundIcon} alt='404'/>
                    <h1>404 - Page Not Found</h1>
                    <p>Sorry, the page you are looking for does not exist.</p>
                    <a className='home-button' href='/'>go to home page</a>
            </div>
        </>
    )
}
export default NotFound;