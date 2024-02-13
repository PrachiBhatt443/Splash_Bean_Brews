// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Router } from 'react-router-dom';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <App />
//   </Router>
// );
// // ReactDOM.render(
// //   <Router>
// //      <App />
// //   </Router>
// // ,document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';
ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Use Router from react-router-dom to wrap your application */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

