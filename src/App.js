import react from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AppPages from "./pages/AppPages/appPages";

import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <AppPages/>
    </BrowserRouter>
  );
}

export default App;
