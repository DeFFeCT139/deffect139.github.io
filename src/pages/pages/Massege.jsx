import react from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../../componens/header/header";
import messegeIco from '../../img/menu_black_24dp.svg'
import menuIco from '../../img/arrow_back_ios_black_24dp.svg'
import HeaderMessege from "../../componens/header/headerMassege";
import RightPanel from "../../componens/RightPanel/RightPanel";

function Messege() {
    let mainInfo = {
        NamePages: 'Сообщения',
        IcoMassege: messegeIco,
        IcoMenu: menuIco,
    }
  return (
    <div>
        <RightPanel nameP = {mainInfo}/>
        <div id="body2" className="body-mai">
          <HeaderMessege nameP = {mainInfo}/>
        </div>
    </div>
  );
}

export default Messege;