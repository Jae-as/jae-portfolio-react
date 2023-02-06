import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import mail from "../../assets/images/mail.gif";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      //need help finding emailjs integration
      .sendForm(
        "service_zoo7yes",
        "template_08h9nfa",
        form.current,
        "jslpxXfOWfi00vLAd"
      )
      .the(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="contact-left">
        <span>I'm excited to work with you!</span>
        <br />
        <span>Contact Me</span>
        <br />
        <img src={mail} alt="mail gif"></img>
      </div>
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            required
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            required
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
