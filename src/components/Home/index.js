import { useState,useEffect } from 'react';
import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetter/index.js'
import Logo from './Logo/index.js'
import {Loader} from 'react-loaders'
const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a','m','C','o','d','e',','];
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']
    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover')
        },4000)
    },[])
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    &nbsp;
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Fron End Developer / JavaScript Expert / FreeLancer </h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
        )
}
export default Home;