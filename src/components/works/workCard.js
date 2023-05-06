
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
const WorkCard = ({className,img,title,description,tools,git,link,alt}) => {
    function imgLInk(){
        window.open(link,'_blank');
    }
    return ( 
        <>
            <div className={className}>
                <div className='image' onClick={()=>imgLInk()}>
                    <img src={img} alt={alt} />
                </div>
                <div className='text'>
                    <h3 className='title'>{title}</h3>
                    <p>{description}</p>
                    <span>{tools}</span>
                    <ul className='links'>
                        <li>
                            <a rel='noreferrer' href={git} target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        </li>
                        <li>
                            <a rel='noreferrer' href={link} target='_blank'><FontAwesomeIcon icon={faGlobe} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}
 
export default WorkCard;