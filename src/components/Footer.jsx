import React from 'react';
import ContactForm from './ContactForm';

class Footer extends React.Component {
   render() {
      return (
         <div className="footer">
            <div className="footer-wrapper">
               <div className="footer-title">Contact</div>
               <div className="white-demarcation-padding">
                  <div className="white-demarcation"></div>
               </div>

               <div className="contactForm-wrapper">
                  <ContactForm></ContactForm>
               </div>
            </div>
         </div>
      );
   }
}

export default Footer;
