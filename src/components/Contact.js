import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';

function Contact() {
  const [formState, setFormState] = useState
  (
    {
      name: '',
      email: '',
      message: ''
    }
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { name, email, message } = formState;
  function handleChange(event) {
    setErrorMessage('');
    setSuccessMessage('');
    console.log(event.target.name);
    console.log(event.target.value);
    setFormState
    (
      {...formState, [event.target.name]: event.target.value}
    );
  }
  console.log(formState);

  function handleSubmit(event) {//what if i had thousands of inputs on a form?? reducer may be better.
    event.preventDefault();
    console.log(formState);
    console.log(formState.name);
    console.log(formState.email);
    console.log(formState.message);
    if (//all false
      !formState.name 
      && 
      validateEmail(formState.email) === false 
      && 
      !formState.message
    ){
      setErrorMessage('Invalid entries in the form.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else if (//only name true
      formState.name 
      && 
      validateEmail(formState.email) === false 
      && 
      !formState.message  
    ){
      setErrorMessage('Please enter a valid email address and message.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else if (// only name and email true
      formState.name 
      && 
      validateEmail(formState.email) === true 
      && 
      !formState.message
    ){
      setErrorMessage('Please enter a message.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else if (// only email true
      !formState.name 
      && 
      validateEmail(formState.email) === true 
      && 
      !formState.message
    ){
      setErrorMessage('Please enter a name and message.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else if (// only email and message true
      !formState.name 
      && 
      validateEmail(formState.email) === true 
      && 
      formState.message
    ){ 
      setErrorMessage('Please enter a name.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else if (// only name and message true
      formState.name 
      && 
      validateEmail(formState.email) === false 
      && 
      formState.message
    ){
      setErrorMessage('Please enter a valid email address.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else if (//only message true
      !formState.name 
      && 
      validateEmail(formState.email) === false 
      && 
      formState.message
    ){ 
      setErrorMessage('Please enter a name and a valid email address.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
    else if (//all true thank you
      formState.name 
      && 
      validateEmail(formState.email) === true 
      && 
      formState.message
    ){ 
      setSuccessMessage('Thank you for submission!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }

  }
  return (
    <div className="contact-container">
      <section className="form-card">
        <h1 data-testid="contact">
          Contact Me
        </h1>
        <form 
          id="contact-form" 
          onSubmit={handleSubmit} 
        >
          <div className="form-name">
            <label htmlFor="name">Name:</label> {/*have to use htmlFor because for is a JS keyword*/}
            <input 
              autoComplete="off" 
              type="text" 
              name="name" 
              defaultValue={name} 
              onBlur={handleChange} 
            />
          </div>
          <div className="form-email">
            <label htmlFor="email">Email Address:</label>
            <input 
              autoComplete="off" 
              type="email" 
              name="email" 
              defaultValue={email} 
              onBlur={handleChange} 
            />
          </div>
          <div className="form-message">
            <label htmlFor="message">Message:</label>
            <textarea 
              name="message" 
              rows="5" 
              defaultValue={message} 
              onBlur={handleChange}
              className="form-textarea"
            />
          </div>
          <div className="form-button-container">
            <button className="form-btn" type="submit">Submit</button>
            
          </div>
          {
            errorMessage && 
            (
              <div>
                <p className="form-error">{errorMessage}</p>
              </div>
            )
          }
          {
            successMessage && 
            (
              <div>
                <p className="form-success">{successMessage}</p>
              </div>
            )
          }
        </form>
      </section>
    </div>
  )
}

export default Contact;