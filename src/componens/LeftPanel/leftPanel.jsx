import { Link } from "react-router-dom";


function LeftPanel(nameP) {
    function leftPanelBtn() {
        var nam = document.querySelector('#leftPanel');
        nam.className = 'left-panel none';
    }
  return (
    <div id='leftPanel' className="left-panel none">
        <div className="header">
        <div onClick={leftPanelBtn} className="ico-left">
          <img src={nameP.nameP.IcoMenuOpen} alt="" />
        </div>
    </div>
    </div>
  );
}

export default LeftPanel;