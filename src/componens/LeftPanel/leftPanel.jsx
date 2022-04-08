import { Link } from "react-router-dom";
import home from '../../img/other_houses_black_24dp.svg'
import like from '../../img/favorite_border_black_24dp.svg'
import suport from '../../img/live_help_black_24dp.svg'
import settings from '../../img/settings_black_24dp.svg'


function LeftPanel(nameP) {
    function leftPanelBtn() {
        var nam = document.querySelector('#leftPanel');
        nam.className = 'left-panel none';
        var nam2 = document.querySelector('#body');
        nam2.className = '';
        var nam3 = document.querySelector('#body2');
        nam3.className = '';
    }
    function leftPanelBtn3() {
      var nam3 = document.querySelector('#body');
      nam3.className = '';
  }
  return (
    <div id='leftPanel' className="left-panel none">
      <div className="header">
        <div className="name-Pagese-LP">{nameP.nameP.NamePages}</div>
        <div onClick={leftPanelBtn} className="ico-left ico-left-LP">
          <img src={nameP.nameP.IcoMenuOpen} alt="" />
        </div>
      </div>
      <div className="link-list-LP">
        <div onClick={leftPanelBtn3} className="item-link"><Link className="item-link-list" to={nameP.nameP.home}><img className="ico-LP" src={home} alt="" /> Главная</Link></div>
        <div onClick={leftPanelBtn3} className="item-link"><Link className="item-link-list" to={nameP.nameP.like}><img className="ico-LP" src={like} alt="" />Понравившиеся</Link></div>
        <div onClick={leftPanelBtn3} className="item-link"><Link className="item-link-list" to={nameP.nameP.suport}><img className="ico-LP" src={suport} alt="" />Тех. Поддержка</Link></div>
        <div onClick={leftPanelBtn3} className="item-link"><Link className="item-link-list" to={nameP.nameP.settings}><img className="ico-LP" src={settings} alt="" />Настройки</Link></div>
      </div>
    </div>
  );
}

export default LeftPanel;