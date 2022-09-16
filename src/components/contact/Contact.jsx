import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7z42ra9', 'template_xy4y2p7', form.current, '3W4EcQIw_9DEB3kV5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
         e.target.reset();   
    };
    return (
        <>
            <section id="contacts">
                <h5>Get in Touch</h5>
                <h2>Contact Me</h2>

                <div className="containers contact__containers">
                    <div className="contact__options">
                        <article className='contact__option'>
                            <AiOutlineMail className='contact__icons' />
                            <h4>Email</h4>
                            <h5>rahulbarnwal1499@gmail.com</h5>
                            <a href="mailto:rahulbarnwal1499@gmail.com tar" target="_blank" rel="noreferrer">Send a Message</a>
                        </article>
                        <article className='contact__option'>
                            <RiMessengerLine className='contact__icons' />
                            <h4>Messenger</h4>
                            <h5>Rahul Kumar</h5>
                            <a href="https://m.me/profile.php?id=100004383049235 tar" target="_blank" rel="noreferrer">Send a Message</a>
                        </article>
                        <article className='contact__option'>
                            <BsWhatsapp className='contact__icons' />
                            <h4>WhatsApp</h4>
                            <h5>8935800317</h5>
                            <a href="https://api.whatsapp.com/send?phone+918935800317 tar" target="_blank" rel="noreferrer">Send a Message</a>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name='email' placeholder='Your Email ' required />
                        <textarea name="message" rows="7" placeholder='your Message' required></textarea>
                        <button type="submit" className='btn btn-primary'>Send Message</button>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Contact
