import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

// this is a functional Component. I think it needs to be passed an onClick event Handler..
// I think we need state or something or fill the formdata.

const ContactForm = props => {
   function handleClick(e) {
      e.preventDefault();
      console.log('hello mr roboto');
   }
   return (
      <Form style={{ padding: '10px' }}>
         <FormGroup>
            <Input type="name" name="text" id="name" placeholder="Name" />
         </FormGroup>

         <FormGroup>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
         </FormGroup>
         <FormGroup>
            <Input type="textarea" name="text" id="formText" placeholder="Your message" />
         </FormGroup>
         <Button onClick={handleClick}>Submit</Button>
      </Form>
   );
};

export default ContactForm;
