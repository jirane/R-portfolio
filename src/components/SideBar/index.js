import './index.scss'
import {Link,NavLink} from 'react-router-dom';
import { useRef,useEffect,useState} from 'react';
import gsap from 'gsap-trial'
import MyLogo from '../../assets/images/logo-s.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {faEnvelope,faHome,faLink,faUser,faSuitcase, faToolbox, faTools} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const SideBar = ()=>{
    const burgerRef = useRef();
    const lineOneRef = useRef();
    const lineTwoRef = useRef();
    const lineThreeRef = useRef()
            const tl = gsap.timeline({paused:true , reversed:true})
            useEffect(()=>{
                tl.to(lineTwoRef.current,{scaleX:0 ,duration:.4,transformOrigin:'center'})
                    .to(lineOneRef.current,{rotation:45,duration:.4,transformOrigin:'center',y:10},'cross')
                    .to(lineThreeRef.current,{rotation:-45,duration:.4,transformOrigin:'center',y:-10},'cross')
                },[tl])
                const [showMenu , setShowMenu] = useState()
                function callShowMenu(){
                    setShowMenu(!showMenu)
                }
                const bar = ()=>{
                    tl.reversed() ? tl.play() : tl.reverse()
                }
                
return(
    <>
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={MyLogo} alt='logo'/>
                <img className='sub-logo' src={LogoSubtitle} alt='Ossama'/>
            </Link>
            <svg onClick={()=>{
                callShowMenu()
                bar()
                }} ref={burgerRef} className="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox='25 25 50 50' width='55' height='55'>
                <line  ref={lineOneRef}  x1='25' y1='40' x2='75' y2='40' stroke='#fff' strokeWidth='4'/>
                <line  ref={lineTwoRef}  x1='25' y1='50' x2='75' y2='50' stroke='#fff' strokeWidth='4'/>
                <line  ref={lineThreeRef}  x1='25' y1='60' x2='75' y2='60' stroke='#fff' strokeWidth='4'/>
            </svg>
            <nav className={`${showMenu ? 'showMenu' : ''}`}>
                <NavLink exact='true' acitveclassname='acitve' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' acitveclassname='acitve' className='about-link' to='about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' activeclassname='acitve' className='works-link' to='works'>
                    <FontAwesomeIcon  icon ={faTools} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' activeclassname='acitve' className='skills-link' to='skills'>
                    <FontAwesomeIcon  icon ={faSuitcase} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' acitveclassname='acitve' className='contact-link' to='contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blanck' rel='noreferrer' href="https://github.com/jirane">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a target='_blanck' rel='noreferrer' href="https://linkedin.com/in/ossama-jirane-570252235">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
                <li>
                    <a target='_blanck' rel='noreferrer' href="https://jirane.github.io/My-portfolio/sam.html">
                        <FontAwesomeIcon icon={faLink}/>
                    </a>
                </li>
            </ul>
        </div>
        </>
    )
}
export default SideBar;