import menuIcoOpen from '../../img/menu_open_black_24dp.svg'

function RightPanel(nameP) {

    function leftPanelBtn() {
        var nam = document.querySelector('#RightPanel');
        nam.className = 'right-panel none';
        var nam2 = document.querySelector('#body');
        nam2.className = '';
        var nam3 = document.querySelector('#body2');
        nam3.className = '';
    }
  return (
    <div id='RightPanel' className="right-panel none">
      <div className="header">
        <div onClick={leftPanelBtn} className="ico-left ico-left-LP">
          <img src={menuIcoOpen} alt="" />
        </div>
        <div className="name-Pagese-RP">{nameP.nameP.NamePages}</div>
      </div>
      <div className="List-Mes"></div>
    </div>
  );
}

export default RightPanel;