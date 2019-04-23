import React from 'react';
import loadable from 'react-loadable';

// home route component
const LoadingComponent = () => <h3>please wait...</h3>;
const HomeComponentPromise = () => {
    return import('./home.component');
}
const AsyncHomeComponent = loadable( {
    loader: HomeComponentPromise,
    loading: LoadingComponent
} ); 

export default AsyncHomeComponent;