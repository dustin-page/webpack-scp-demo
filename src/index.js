
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
    }
}

// render inside `app-root` element
ReactDOM.render( <App />, document.getElementById( 'app-root' ) );