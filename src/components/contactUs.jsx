import React from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../style/contactUs.css'

const ContactUs = () =>{

    const refForm = useRef();

    const sendForm = (event) =>{
        event.preventDefault();

        const serviceId = "service_zwlu7bo";
        const templateId = "template_mcxds34";
        const apiKey = "9K_7e1hMIZIMei5Z2"

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then( result => Alert(result.text))
        .catch( error => console.error(error))

        const Alert = (result) => {
          if( result === "OK"){
            Swal.fire({
            title:"Formulario enviado con éxito",
            icon:"success"
          })
        } else{
            Swal.fire({
            title:"Error al enviar formulario, vuelve a intertarlo",
            icon:"error"
          })
        }}
    }


    return (
            <form ref={refForm} className='form' action="" onSubmit={sendForm}>
              <div className='cont-form'>
                <label className='label-form' for="company"><i class="bi bi-buildings-fill"></i> Company</label>
                <input type='text'  className='input-form' id='company'  name='company' required placeholder="Name of the company"/>
                <label className='label-form' for="userName"><i class="bi bi-person-fill"></i> Recruiter</label>
                <input type='text' className='input-form' id='userName' name='userName' required placeholder="Full name"/>
                <label className='label-form' for="mail"><i class="bi bi-envelope-at-fill"></i> Email</label>
                <input type='mail' className='input-form' id='mail' name='mail' required placeholder="Email"/>
                <label className='label-form' for="message"><i class="bi bi-chat-dots-fill"></i> Message</label>
                <textarea className='message-form' id='message' name='message' required placeholder="Enter your message"></textarea>
                <button class="btn btn-form">
                <strong>Enviar</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </button>
              </div>
            </form>
    )
}

export default ContactUs;