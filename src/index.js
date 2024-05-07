import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './store/index';

import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import  counterSlice  from './store/index';
import authSlice from './store/authSlice';

const store = configureStore({
    reducer:{
        counter : counterSlice,
        auth : authSlice
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <App /></Provider>);
