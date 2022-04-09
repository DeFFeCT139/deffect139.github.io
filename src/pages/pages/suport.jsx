import Header from "../../componens/header/header";
import messegeIco from '../../img/question_answer_black_24dp.svg'
import menuIco from '../../img/menu_black_24dp.svg'
import menuIcoOpen from '../../img/menu_open_black_24dp.svg'
import ListFuck from "../../componens/Main/listFack";
import PostList from "../../componens/post/postList";
import LeftPanel from "../../componens/LeftPanel/leftPanel";
import SuportInput from "../../componens/suport/suportInput";
import SuportMassege from "../../componens/suport/suportMassege";

function Suport() {
    //параметры страницы 
    let mainInfo = {
        NamePages: 'Тех. поддержка',
        IcoMassege: messegeIco,
        IcoMenu: menuIco,
        IcoMenuOpen: menuIcoOpen,
        home: '/',
        like: '/like',
        suport: '',
        settings:'/',
        createPost:'/cretepost'
    }
  return (
    <div className="page-suport">
        <LeftPanel nameP = {mainInfo}/>
        <div id="body2" className="body-mai">
          <Header nameP = {mainInfo}/>
          <SuportMassege/>
          <SuportInput/>
        </div>
    </div>
  );
}

export default Suport;