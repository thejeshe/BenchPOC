import React from 'react';
import {createRoot} from "react-dom/client";
// const container = document.getElementById("formbuilder");
import App from './App';

const mount = (el, text) => {
    const app = createRoot(el);
    app.render(<App text={text}/>);
  };
  
  // If we are in development and in isolation,
  // call mount immediately
  if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#formbuilder');
  
    if (devRoot) {
      mount(devRoot);
    }
  }
  
  // We are running through container
  // and we should export the mount function
  export default mount;
