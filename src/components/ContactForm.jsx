import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Swal from 'sweetalert2';

const ContactForm = props => {
   function handleClick(e) {
      e.preventDefault();
      Swal.fire({
         title: 'Thanks for clicking!',
         text: `I'm debugging node.js feel free to email me: achengster4@gmail.com`,
         imageUrl: 'https://i.imgur.com/HoYp1cA.gif',
         imageWidth: 300,
         imageHeight: 200,
         imageAlt: 'Custom image',
      });
   }

   return (
      <Form>
         <FormGroup>
            <Input type="name" name="text" id="name" placeholder="Name" />
         </FormGroup>
         <FormGroup>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
         </FormGroup>
         <FormGroup>
            <Input type="textarea" name="text" id="formText" placeholder="Your message" style={{ minHeight: 200 }} />
         </FormGroup>
         <Button onClick={handleClick}>Submit</Button>
      </Form>
   );
};

export default ContactForm;
