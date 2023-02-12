import './indes.scss'
import Loader from 'react-loaders';
import AnimatedLetter from '../AnimatedLetter/index'
import {useState} from 'react'
const skillsArr = ['S','k','i','l','l','s',' ','&',' ','E','p','e','r','i','e','n','c','e']
const tags = ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Ajax', 'EmailJs', 'React','Bootstrap', 'Sass', 'Git']

 const color =()=> 
        tags.map((tag,i) =>{
        return(
            <>
                <span className='tech-tag' key={i}>{' '+tag }</span>
                <span>&sbquo;</span>
            </>     
        )
    })
const Skills = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },3000)
    const progressBars = document.querySelectorAll('.bar');
        setInterval(()=>{
        progressBars.forEach((bar)=>{
            const val =  bar.getAttribute('data-width');
            bar.style.width = val+'%'
        })
    },10)
    

    
    return(
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetter letterClass={letterClass} strArray={skillsArr} idx={15}/>
                    </h1>
                    <p>
                        Expert in front-end development including technologies like {color()} etc.
                    </p>
                    <p>
                        I’m not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first
                        web design. I put special effort into optimizing my code and providing the best user experience. I
                        would love to give you any kind of support also after the project's completion. I guarantee a
                        commitment during work on your project
                    </p>
                </div>
                <div className='skills'>
                    <div className="html skill">
                        <h3>Html&Css</h3>
                        <div className='skill-bar'>
                            <span className=' bar' data-width={90} ></span>
                        </div>
                    </div>
                    <div className="js skill">
                        <h3>JavaScript</h3>
                        <div className='skill-bar'>
                            <span className=' bar' data-width={85}></span>
                        </div>
                    </div>
                    <div className="react skill">
                        <h3>React</h3>
                        <div className='skill-bar'>
                            <span className=' bar' data-width={80}></span>
                        </div>
                    </div>
                    <div className="jquery skill">
                        <h3>jQuery</h3>
                        <div className='skill-bar'>
                            <span className=' bar' data-width={60}></span>
                        </div>
                    </div>
                    <div className="php skill">
                        <h3>PHP</h3>
                        <div className='skill-bar'>
                            <span className=' bar' data-width={30}></span>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}
export default Skills;