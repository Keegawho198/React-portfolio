import React from "react";

import Button from 'react-bootstrap/Button';


const Contact = () => (
  <form className="text-center">
  <h1>Contact Me</h1>
  <p>Enter your name</p>
  <input
    type="text"
  />

  <p>Email</p>
  <input
    type="text"
  />

<p>Message</p>
  <input
    type="text"
  />

<br></br>
<br></br>

  <Button variant="primary">Submit</Button>{' '}


</form>
);

export default Contact;
