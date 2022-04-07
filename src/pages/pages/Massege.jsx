import react from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../../componens/header/header";
import messegeIco from '../../img/menu_black_24dp.svg'
import menuIco from '../../img/arrow_back_ios_black_24dp.svg'
import HeaderMessege from "../../componens/header/headerMassege";

function Messege() {
    let mainInfo = {
        NamePages: 'Сообщения',
        IcoMassege: messegeIco,
        IcoMenu: menuIco,
    }
  return (
    <div>
        <HeaderMessege nameP = {mainInfo}/>
    </div>
  );
}

export default Messege;