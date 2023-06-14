import React from 'react';
import {createRoot} from "react-dom/client";
const container = document.getElementById("root");
const app = createRoot(container);
import App from './App';

app.render(<App />);
