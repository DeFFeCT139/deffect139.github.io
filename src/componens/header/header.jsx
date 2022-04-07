import react from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function Header(nameP) {
  return (
    <div className="header">
        <div className="ico-left">
            <img src={nameP.nameP.IcoMenu} alt="" />
        </div>
        <div>{nameP.nameP.NamePages}</div>
        <div className="ico-right">
            <img src={nameP.nameP.IcoMassege} alt="" />
        </div>
    </div>
  );
}

export default Header;
