import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
// import {store} from "./redux/Store"
// import { BrowserRouter } from 'react-router-dom';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

            <App />
    
    </React.StrictMode>
);

//reportWebVitals(console.log);
