import React from 'react';

import HelloComponent from './components/common/hello.component';

// about route component
const AboutComponent = ( props ) => {
    return (
        <h1>About Component! <HelloComponent /></h1>
    );
}

export default AboutComponent;