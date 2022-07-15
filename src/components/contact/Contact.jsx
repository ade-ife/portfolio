import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BsEnvelope} from 'react-icons/bs'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k21tg8s', 'template_8aq38hi', form.current, '5SzJoWUkRHKf1tpY1')
    setMsg("Mensagem Enviada! Obrigado.")
    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h2 className='text-light'>Get in Touch</h2>
      <h5 className='text-light'>Got a job for me, or a question, or you just want to say hi? Feel free to reach out to me</h5>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>jadeniji00@gmail.com</h5>
            <a href="mailto:jadeniji54@gmail.com" >Send me a mail</a>
          </article>
          <article className="contact__option">
            <RiLinkedinBoxLine className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Joshua Adeniji</h5>
            <a href="https://www.linkedin.com/in/joshua-adeniji/" target="_blank" rel="noopener noreferrer">Connect with me</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your e-mail address" required />
            <textarea name="message" rows="7" required placeholder="Enter your message..."></textarea>
            <button type="submit" className="btn btn-primary">Say Hello</button><span>{msg}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact