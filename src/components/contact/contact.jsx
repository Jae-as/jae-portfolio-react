import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import mail from "../../assets/images/mail.gif";
import {validateEmail} from "../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "user_email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

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
      .then(
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
        <div className="error-message"> {errorMessage} </div>  
          <input
            required
            type="text"
            name="name"
            className="user"
            placeholder="Name"
            onBlur={handleChange}
            // value={name}
          />
          <input
            required
            type="email"
            name="email"
            className="user"
            placeholder="Email"
            onBlur={handleChange}
            // value={email}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            onBlur={handleChange}
            // value={message}
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
