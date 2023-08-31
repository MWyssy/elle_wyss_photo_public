import '../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    const emailSubject = 'Photography Enquiry'

    return (
        <footer id='footer-bar'>
            <section id='icons'>
                <a href={`mailto:eliza.medrea@gmail.com?subject=${emailSubject}`} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                </a>
                <a href='' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faInstagram} className='icon' /> 
                </a>
                <a href='https://m.facebook.com/photomewp?eav=AfaPVF3S4FdBIcQADqcItT7PaIdqXNWBMLcFx_Mj6O1g7rNdbt-1tTm_KIo9eO1m3tE&paipv=0' target='_blank' rel='noreferrer'>
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