import react from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../../componens/header/header";
import messegeIco from '../../img/question_answer_black_24dp.svg'
import menuIco from '../../img/menu_black_24dp.svg'
import ListFuck from "../../componens/Main/listFack";
import PostList from "../../componens/post/postList";

function Messege() {
    let mainInfo = {
        NamePages: 'Сообщения',
        IcoMassege: messegeIco,
        IcoMenu: menuIco,
    }
  return (
    <div>
        <Header nameP = {mainInfo}/>
    </div>
  );
}

export default Messege;