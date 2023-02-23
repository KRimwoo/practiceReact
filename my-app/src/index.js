import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chap3/Library';
import Clock from './chap4/Clock';
import CommentList from './chap5/CommentList';
import NotificationList from './chap6/NotificationList';
import Accommodate from './chap7/Accommodate';
import ConfirmButton from './chap8/ConfirmButton';
import Landingpage from './chap9/LandingPage';
import AttendanceBook from './chap10/AttendanceBook';
import SignUp from './chap11/SignUp';
import Calculator from './chap12/Calculator';
import ProfileCard from './chap13/ProfileCard';
import DarkOrLight from './chap14/DarkOrLight';
import Blocks from './chap15/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
