import '../Styles/Contact.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'


function Contact() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [location, setLocation] = useState("")
    const [messageBody, setMessageBody] = useState("")

    function handleChange(event) {
        switch (event.target.id) {
            case 'form-name':
                setName(event.target.value);
                break;
            case 'form-email':
                setEmail(event.target.value);
                break;
            case 'form-location':
                setLocation(event.target.value);
                break;
            case 'form-phone':
                setPhone(event.target.value);
                break;
            case 'message':
                setMessageBody(event.target.value);
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        emailjs.send(SERVICE_ID,TEMPLATE_ID,{
            from_name: name,
            to_name: "Elle Wyss",
            message: `
                Name: ${name},
                Email: ${email},
                Phone: ${phone},
                Location: ${location}
                
                ${messageBody}
            `,
            }, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully',
                    text: result.text
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops, something went wrong!',
                    text: error.text,
                })
            })
        event.target.reset()
        setEmail('')
        setLocation('')
        setMessageBody('')
        setName('')
        setPhone('')

    }

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const USER_ID = import.meta.env.VITE_USER_ID



    return (
        <section id='contact'>
            <h2 id='contact-title'>Contact</h2>
            <form id='contact-form' onSubmit={handleSubmit}>
                <section id='form-details'>
                    <input 
                        className='form-label' 
                        type="text" 
                        id="form-name"
                        placeholder='Name'
                        value={name.input}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        className='form-label' 
                        type="email" 
                        id="form-email" 
                        placeholder='Email'
                        value={email.input}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        className='form-label' 
                        type="tel" 
                        pattern='^0\d{9,10}$'
                        id="form-telephone" 
                        placeholder='Phone number'
                        value={phone.input}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        className='form-label' 
                        type="text" 
                        id="form-location" 
                        placeholder='Location'
                        value={location.input}
                        onChange={handleChange}
                        required 
                    />
                </section>
                <section >
                    <textarea 
                    className='form-label' 
                    id="message" 
                    placeholder='Hi Elle...'
                    value={messageBody.input}
                    onChange={handleChange}
                    required 
                />
                </section>
                <button className='form-button' type="submit">
                    Submit
                </button>
            </form>
        </section>
    )

}

export default Contact