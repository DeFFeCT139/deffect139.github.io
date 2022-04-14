import react from "react"
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

function HeaderMessege(nameP) {
  function leftPanelBtnOpen() {
    var nam = document.querySelector('#RightPanel');
    nam.className = 'right-panel';
    var nam2 = document.querySelector('#body');
    nam2.className = 'oveh';
    var nam3 = document.querySelector('#body2');
    nam3.className = 'opas';
  }
  return (
    <div className="header">
        <div className="ico-left">
          <Link to={'/'}><img src={nameP.nameP.IcoMenu} alt="" /></Link>
        </div>
        <div>{nameP.nameP.NamePages}</div>
        <div onClick={leftPanelBtnOpen} className="ico-right">
            <img src={nameP.nameP.IcoMassege} alt="" />
        </div>
    </div>
  );
}

export default HeaderMessege;