import './index.scss'
import {useState ,useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetter/index'
import weather from '../../assets/images/coolweather.jpg'
import calc from '../../assets/images/calc.jpg'
import bondi from '../../assets/images/bondi.jpg'
import exTracker from '../../assets/images/expenseTracker.jpg'
import WorkCard from './workCard'
import Loader from 'react-loaders'
const Works = () =>{
    const [letterClass,setLetterClass] = useState('text-animate')
    useEffect(()=>{
        setTimeout(()=>{return setLetterClass('text-animate-hover')},3000)
    },[])
    return (
        <>
            <div className='container work-page'>
                <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['S','o','m','e',' ','O','f',' ','M','y',' ','W','o','r','k']} idx={15}/>
                </h1>
                </div>
                <div className='work'>
                    <WorkCard className='work-card' img={weather} title='Weather App' description='a small handy weather application, help you to know the weather of any place in the world.' tools='create-react-app + weather api' link='https://coolweather.netlify.app/' git='https://github.com/jirane/weahter-app' alt='weather'/>
                    <WorkCard className='work-card' img={calc} title='Calculator' description='comprehensive calculator application with all the main function, with a simple design.' tools='vite + react' alt='calc' link='https://clcul.netlify.app/' git='https://github.com/jirane/calculator-vite-react'/>
                    <WorkCard className='work-card' img={exTracker} title='Expense Tracker App' description='an expense tracker application to help you manage and track you daily expenses.' tools='create-react-app + react-hooks' alt='expense tracker' link='https://exepense-tracker.netlify.app/' git='https://github.com/jirane'/>
                    <WorkCard className='work-card' img={bondi} title='Static Webstie' description='turning psd to an html' tools='bootstrap + js' alt='business website' link='https://grand-cendol-681259.netlify.app/' git='https://github.com/jirane/Bondi'/>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
}
export default Works;