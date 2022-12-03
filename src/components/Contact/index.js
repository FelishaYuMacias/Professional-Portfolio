import React, {useState} from 'react';
import './assets/style.css';


export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState; 

  
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const handleEmpty = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: " "});
      console.log('Handle Form', formState);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
  return (
    <div>
      <h2>Contact Me</h2>
      <form className='mx-auto' id="contact-form" onSubmit={handleSubmit}>
      <input className="form-control"  type="text"
            name="name"
            defaultValue={name}
            onBlur={handleEmpty} placeholder="Name"/>
  <div className="form-group">
    <input type="email" 
    name="email"
    defaultValue={email}
    onBlur={handleEmpty}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <textarea className="form-control" 
    name="message"
    defaultValue={message}
    onBlur={handleEmpty}id="exampleFormControlTextarea1" rows="3" placeholder="Write your message here"></textarea>
  </div>
  {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
  <button onClick={handleSubmit} type="submit" className="btn">Submit</button>
</form>
    </div>
  );
}