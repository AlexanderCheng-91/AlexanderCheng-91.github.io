import React from 'react';
// import ContactForm from './ContactForm';
import ContactForm2 from './ContactForm2';

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
                  {/* <ContactForm></ContactForm> */}
                  <ContactForm2></ContactForm2>
               </div>
            </div>
         </div>
      );
   }
}

export default Footer;
