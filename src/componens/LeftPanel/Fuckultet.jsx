import { Link } from "react-router-dom";

function Fuckultet(post) {
  return (
    <div className="item-link">
        <Link className="item-link-list" to={'/faculty/' + post.post.nameFuck} >
            <img className="ico-LP photo-Fuck" src={post.post.photoFuck} alt="" />
            {post.post.nameFuck}
        </Link>
    </div>
  );
}

export default Fuckultet;