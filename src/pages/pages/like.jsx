import Header from "../../componens/header/header";
import messegeIco from '../../img/question_answer_black_24dp.svg'
import menuIco from '../../img/menu_black_24dp.svg'
import menuIcoOpen from '../../img/menu_open_black_24dp.svg'
import ListFuck from "../../componens/Main/listFack";
import LeftPanel from "../../componens/LeftPanel/leftPanel";
import PostListLike from "../../componens/post/postListLike";

function Like() {
    //параметры страницы 
    let mainInfo = {
        NamePages: 'Понравившиеся',
        IcoMassege: messegeIco,
        IcoMenu: menuIco,
        IcoMenuOpen: menuIcoOpen,
        home: '/',
        like: '',
        suport: '/suport',
        settings:'/',
        createPost:'/cretepost',
        addfuck:'/addfuck/'
      }
  return (
    <div>
        <LeftPanel nameP = {mainInfo}/>
        <div id="body2" className="body-mai">
          <Header nameP = {mainInfo}/>
          <PostListLike/>
        </div>
    </div>
  );
}

export default Like;