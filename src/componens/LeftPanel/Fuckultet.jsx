import { Link } from "react-router-dom";
function leftPanelBtn3() {
  var nam = document.querySelector('#leftPanel');
  nam.className = 'left-panel none';
  var nam2 = document.querySelector('#body');
  nam2.className = '';
  var nam3 = document.querySelector('#body2');
  nam3.className = '';
  }
function  Fuckultet(post) {
  return (
    <div onClick={leftPanelBtn3} className="item-link">
        <Link className="item-link-list" to={'/faculty/' + post.post.nameFuck} >
            <img className="ico-LP photo-Fuck" src={post.post.photoFuck} alt="" />
            {post.post.nameFuck}
        </Link>
    </div>
  );
}

export default Fuckultet;