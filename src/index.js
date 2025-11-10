import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import CreateProject from './CreateProject';
import CreateTeam from './CreateTeam';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path = "/" element = {<Login />} />
      <Route path = "/Login" element = {<Login />} />
      <Route path = "/Signup" element = {<Signup />} />
      <Route path = "/CreateTeam" element={<CreateTeam />} />
      <Route path = "/CreateProject" element = {<CreateProject />} />
    </>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router = {router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
