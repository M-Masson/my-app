import React from "react";
import './styles/style.sass';
import RoutesApp from "./route";
import ReactDom from "react-dom/client";

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <RoutesApp />
   </React.StrictMode>
);

