import React from 'react';
// import { Button, Form, FormGroup, Input } from 'reactstrap';
// import Swal from 'sweetalert2';

class ContactForm2 extends React.Component {
    
 
    render() {
       return (
        <div>
        <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          defaultValue="0855412d-bdab-4d1c-8709-c215f8999a71"
        />
        <div>
        <input type="text" name="name" required="" />
        </div>
        <div>
        <input type="email" name="email" required="" />
        </div>
        <textarea name="message" required="" defaultValue={""} />
        <div className="h-captcha" data-captcha="true" />
        <button type="submit">Submit Form</button>
      </form>
      </div>
       )
    }
}

export default ContactForm2;