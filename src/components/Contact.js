import React, { useState } from 'react';
// import { validateEmail } from '../utils/helpers.js';

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
  const { name, email, message } = formState;
  function handleChange(event) {
    setFormState
    (
      {...formState, [event.target.name]: event.target.value}
    );
  }
  function handleSubmit(event) {
    console.log(event.target);
    setErrorMessage('');
  }
  return (
    <div className="contact-container">
      <section>
        <h1 data-testid="contact">
          Contact Me
        </h1>
        <form id="contact-form" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name">Name:</label> {/*have to use htmlFor because for is a JS keyword*/}
            <input autoComplete="off" type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {
            errorMessage && //if theres an error message, if this first value is true then the second expression is evaluated. so when error message is a truthy value the div is rendered
            (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )
          }
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Contact;