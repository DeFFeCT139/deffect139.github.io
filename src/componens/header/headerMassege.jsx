import react from "react"
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

function HeaderMessege(nameP) {
  return (
    <div className="header">
        <div className="ico-left">
          <Link to={'/'}><img src={nameP.nameP.IcoMenu} alt="" /></Link>
        </div>
        <div>{nameP.nameP.NamePages}</div>
        <div className="ico-right">
            <img src={nameP.nameP.IcoMassege} alt="" />
        </div>
    </div>
  );
}

export default HeaderMessege;