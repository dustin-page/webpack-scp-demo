import React from 'react';
 
import HelloComponent from './components/common/hello.component';

// contact route component
const ContactComponent = ( props ) => {
    return (
        <h1>Contact Component! <HelloComponent /></h1>
    );
}

export default ContactComponent;