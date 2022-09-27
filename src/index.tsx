import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {css, Global} from '@emotion/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global
        styles={css`
          html, body, #root {
            height: 100%;
            padding: 0;
            margin: 0;
            background-color: #F4F5FA;
          }
          * {
            font-family: 'Inter', sans-serif !important;
            font-weight: 400 !important;  
            line-height: 1.5 !important;
            letter-spacing: 0.15px !important;
          }
        `}
      />
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
