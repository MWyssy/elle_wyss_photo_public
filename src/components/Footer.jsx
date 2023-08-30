import '../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <footer id='footer'>
            <section id='icons'>
                <a href='' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                </a>
                <a href='' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faInstagram} className='icon' /> 
                </a>
                <a href='' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faFacebook} className='icon' />
                </a>
            </section>
                <h4 id='created-by'>designed, developed, and deployed by <a 
                    href='https://www.linkedin.com/in/michael-ian-wyss/' 
                    target='_blank'
                    id='mw-link'
                    rel='noreferrer'
                >
                    Mike Wyss
                    </a>
                </h4>
            
        </footer>
    )
}

export default Footer