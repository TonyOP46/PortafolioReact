import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../Contact.css";

const Contact = () => {

  return (
    <div className="form">
      <div className="form-action">
      <form action="">
        <input type="text" name="email" placeholder="Digite su correo electronico"/>
        <h1>
          We'll never share your email with anyone else
        </h1>
        <p>Comments</p>
        <textarea name="" id="" cols="50" rows="10"></textarea>
        <button>
          Submit
        </button>
      </form>
      </div>
    </div>
    
  );
};

export default Contact;
