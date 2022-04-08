import react from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Like from "../pages/like";
import Main from "../pages/Main";
import Messege from "../pages/Massege";
import Suport from "../pages/suport";

function AppPages() {
  return (
        <Routes>
            <Route exact path='/' element={<Main/>} />
            <Route exact path='/messege' element={<Messege/>} />
            <Route exact path='/like' element={<Like/>} />
            <Route exact path='/suport' element={<Suport/>} />
        </Routes>
  );
}

export default AppPages;
