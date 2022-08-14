import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ebpjgi', 'template_ecxzzk1', form.current, 'EpUXX7AyNvllNqgJI')

    e.target.reset();
     
  };

  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>izumidazai06@gmail.com</h5>
            <a
              href="mailto:izumidazai06@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>

          <article className="contact_option">
            <BsLinkedin className="contact_option-icon"/>
            <h4>Linkedin</h4>
            <h5>shubhambisht08</h5>
            <a
              href="https://linkedin.com/in/shubhambisht08"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
           
           <button type="submit" className="btn btn-primary">send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// https://github.com/Shubham-8-6/NewsSource.git
