import {useState} from "react"
import Header from "../../componens/header/header";
import messegeIco from '../../img/question_answer_black_24dp.svg'
import menuIco from '../../img/menu_black_24dp.svg'
import menuIcoOpen from '../../img/menu_open_black_24dp.svg'
import ListFuck from "../../componens/Main/listFack";
import PostList from "../../componens/post/postList";
import LeftPanel from "../../componens/LeftPanel/leftPanel";

function Main() {
    //параметры страницы 
    let mainInfo = {
        NamePages: 'Главная',
        IcoMassege: messegeIco,
        IcoMenu: menuIco,
        IcoMenuOpen: menuIcoOpen,
        home: '/',
        like: 'like/',
        suport: 'suport',
        settings:'/',
        createPost:'/cretepost',
        addfuck:'/addfuck/'
      }
      let state2 = {
        one: true,
        two: false,
        free:false,
      }
      const [mainProp, setMainProp] = useState(state2);
  return (
    <div>
        <LeftPanel nameP = {mainInfo}/>
        <div id="body2" className="body-mai">
          <Header nameP = {mainInfo}/>
          <ListFuck setProp={setMainProp}/>
          <PostList prop={mainProp}/>
        </div>
    </div>
  );
}

export default Main;
