import { get, getDatabase, onValue, ref, set } from "firebase/database";
import {useState} from "react"
import {useParams} from 'react-router-dom'
import Header from "../header/header";
import LeftPanel from "../LeftPanel/leftPanel";
import messegeIco from '../../img/question_answer_black_24dp.svg'
import menuIco from '../../img/menu_black_24dp.svg'
import menuIcoOpen from '../../img/menu_open_black_24dp.svg'
import AboutFacult from "./componens/AboutFacult";
import ListPostFuck from "./componens/ListPostFuck";

let fackInfo2 = []
let b = {nameFuck: ''}
let key = []

function AboutFuck() {
    const params = useParams();
    key =  params.nameFuck;
    const[fackInfo, setFuck] = useState(fackInfo2)  
    const database = getDatabase()
    onValue(ref(database, 'fukul/' + key), (snapshot) => {
      fackInfo2 = snapshot.val()
      if (fackInfo2.nameFuck == b.nameFuck){
      } else {
          setFuck( fackInfo2 )
          b = fackInfo2
      }
    });
    let mainInfo = {
        NamePages: key,
        IcoMassege: messegeIco,
        IcoMenu: menuIco,
        IcoMenuOpen: menuIcoOpen,
        home: '/',
        like: '/like/',
        suport: '/suport',
        settings:'/',
        createPost:'/cretepost',
        addfuck:'/addfuck/'
      }
    return (
      <div className="">
          <LeftPanel nameP = {mainInfo}/>
        <div id="body2" className="body-mai">
          <Header nameP = {mainInfo}/>
          <AboutFacult nameP={fackInfo}/>
          <ListPostFuck nameP={fackInfo}/>
        </div>
      </div>
    );
  }

export default AboutFuck;