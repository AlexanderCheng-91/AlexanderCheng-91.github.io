import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
// import Swal from 'sweetalert2';

// const ContactForm = props => {
//    function handleClick(e) {
//       e.preventDefault();
//       Swal.fire({
//          title: 'Thanks for clicking!',
//          text: `I'm debugging node.js feel free to email me: achengster4@gmail.com`,
//          imageUrl: 'https://i.imgur.com/HoYp1cA.gif',
//          imageWidth: 300,
//          imageHeight: 200,
//          imageAlt: 'Custom image',
//       });
//    }

export default class ContactForm extends Component{
   

   render(){
      return (
         <Form action="https://api.web3forms.com/submit" method="POST">
         <input 
         type="hidden"
         name="access_key"
         defaultValue="0855412d-bdab-4d1c-8709-c215f8999a71"
            />
            
            <FormGroup>
               <Input type="text" name="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
               <Input type="email" name="email" placeholder="Enter email" />
            </FormGroup>
            <FormGroup>
               <Input name="message" placeholder="Your message" style={{ minHeight: 200 }} />
            </FormGroup>
            <Button type="submit">Submit</Button>
         </Form>
      );
   };
};

