import React from 'react';
import ContactForm from './ContactForm';

class Footer extends React.Component {
   handleClick = () => {
      console.log('hello2');
   };
   render() {
      return (
         <div className="footer">
            <div className="footer-title">Contact</div>
            <div className="white-demarcation-padding">
               <div className="white-demarcation"></div>
            </div>
            <button onClick={this.handleClick}>hello2</button>
            <ContactForm></ContactForm>
         </div>
      );
   }
}

export default Footer;
