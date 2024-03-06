import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';
import "@fontsource/varela-round/"; // Defaults to weight 400


const root = ReactDOM.createRoot(document.getElementById("root"));
localStorage.setItem("theme", "light");
root.render(
    <App />
);
