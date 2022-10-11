import React from 'react';
import { createRoot} from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import App from './containers/app.js'

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>  
// )
// root.render(
//   <div>
//     <Carte />
//     <Carte />
//     <Carte />
//   </div>
// );
const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode><App /></React.StrictMode>)

// ReactDOM.render(
//  <App />
// ,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
