import '../Styles/Contact.css'
import { useState } from 'react'

function Contact() {
    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }

    return (
        <section id='contact'>
            <h2 id='contact-title'>Contact</h2>
            <form onSubmit={onSubmit} id='contact-form'>
                <section id='form-details'>
                    <input 
                        className='form-label' 
                        type="text" 
                        id="form-name"
                        placeholder='Name'
                        required 
                    />
                    <input 
                        className='form-label' 
                        type="email" 
                        id="form-email" 
                        placeholder='Email'
                        required 
                    />
                    <input 
                        className='form-label' 
                        type="tel" 
                        pattern='^0\d{9,10}$'
                        id="form-telephone" 
                        placeholder='Phone number'
                        required 
                    />
                    <input 
                        className='form-label' 
                        type="text" 
                        id="form-location" 
                        placeholder='Location (example: Leeds, UK)'
                        required 
                    />
                </section>
                <section >
                    <textarea 
                    className='form-label' 
                    id="message" 
                    placeholder='Hi Eliza...'
                    required 
                />
                </section>
                <button className='form-button' type="submit">
                    {formStatus}
                </button>
            </form>
        </section>
    )

}

export default Contact