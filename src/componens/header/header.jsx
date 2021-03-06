import react from "react"
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

function Header(nameP) {
  function leftPanelBtnOpen() {
    var nam = document.querySelector('#leftPanel');
    nam.className = 'left-panel';
    var nam2 = document.querySelector('#body');
    nam2.className = 'oveh';
    var nam3 = document.querySelector('#body2');
    nam3.className = 'opas';
  }
  return (
    <div className="header">
        <div onClick={leftPanelBtnOpen} className="ico-left">
          <img src={nameP.nameP.IcoMenu} alt="" />
        </div>
        <div>{nameP.nameP.NamePages}</div>
        <div className="ico-right">
          <Link to={'/messege'}><img src={nameP.nameP.IcoMassege} alt="" /></Link>
        </div>
    </div>
  );
}

export default Header;
