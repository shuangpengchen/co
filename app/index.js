import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { AppContainer } from 'react-hot-loader'
// import configureStore from '../config/configureStore'

import HomePage from './containers/home'



const mountNode = document.getElementById('app');
// const store = configureStore();

render(
    <div>
        <HomePage />
    </div>
    ,
    mountNode
);

// if(module.hot && process.env.NODE_ENV !== 'production'){
//     module.hot.accept();
// }