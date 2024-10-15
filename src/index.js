import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

// Create a root to render your app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app wrapped in the Provider
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
