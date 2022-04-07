import react from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Messege from "../pages/Massege";

function AppPages() {
  return (
        <Routes>
            <Route exact path='/' element={<Main/>} />
            <Route exact path='messege/' element={<Messege/>} />
        </Routes>
  );
}

export default AppPages;
