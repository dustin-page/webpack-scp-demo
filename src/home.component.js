import React from 'react';

import HelloComponent from './components/common/hello.component';

// home route component
const HomeComponent = ( props ) => {
    return (
        <h1>Home Component! <HelloComponent /></h1>
    );
}

export default HomeComponent;