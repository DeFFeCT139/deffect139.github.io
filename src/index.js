import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

//подключаю fribase rtbd 
const firebaseConfig = {
  apiKey: "AIzaSyCqOuyQKzFg6B6J8mknWphPqqaXIs1zCKs",
  authDomain: "synergynews-d3924.firebaseapp.com",
  databaseURL: "https://synergynews-d3924-default-rtdb.firebaseio.com",
  projectId: "synergynews-d3924",
  storageBucket: "synergynews-d3924.appspot.com",
  messagingSenderId: "48529601937",
  appId: "1:48529601937:web:f34f575d5755ff2c5cd630"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
