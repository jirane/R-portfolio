import './index.scss'
import { useState,useEffect,useRef } from 'react'
import {MapContainer, TileLayer,Marker,Popup} from 'react-leaflet'
import emailjs from '@emailjs/browser'
import {Loader} from 'react-loaders'
import AnimatedLetters from '../AnimatedLetter/index'
const location = [30.4702800,-8.8769500]
const Contact = ()=>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm = useRef();
    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover')
        },3000)
    },[])
    const sendEmail = (e)=>{
        e.preventDefault()
        emailjs.sendForm(
            'service_i3j7kt9',
            'contact-form',
            refForm.current,
            'ZU6HF5p8weOE-tYNW'
        )
        .then(()=>{
            alert('Message successfully sent!')
            window.location.reload()
        },
        ()=>{
            alert('Faild to sent the message!, Please try again')
        })
    }
    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                    </h1>
                    <p>
                        I am interested in freelance opportunities – especially
                        ambitious or large projects. However, if you have other request or
                        question, don’t hesitate to contact me using below form
                        either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder='Name' required/>
                                </li>
                                <li className="half">
                                    <input type="text" name="email" placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message'></textarea>
                                </li>
                                
                                <li>
                                    <input type="submit" className="flat-button" value='send' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='map'>
                        <MapContainer
                            className='map-holder'
                                center={location}
                                zoom={10}
                                maxZooma={18}
                        >
                            <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={location}>
                                <Popup>
                                    I live here<br/>feel free to visit, and have a cup of coffe
                                </Popup>
                            </Marker>

                        </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Contact;