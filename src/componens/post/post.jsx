import like from '../../img/favorite_black_24dp.svg'
import nolike from '../../img/favorite_border_black_24dp.svg'


function Post(post) {
    let dateMas = new Date(post.post.date)
    let month = Number(dateMas.getMonth()) + 1
    let day = dateMas.getDate()
    let hours = dateMas.getHours(); // 10
    let min = dateMas.getMinutes(); // 0
    var date = String(day +"."+'0'+ String(month) + " "+ hours + ':'+ min )
  return (
    <div className="post">
        <div className="post-heaser">
            <div className="name-ico-fuck-post">
                <img className="ava-fack-post" src={post.post.avaFuk} alt="" />
                <div className="name-fuck-post">{post.post.nameFuck}</div>
            </div>
        </div>
        <div>
            <img className="photo-Post" src={post.post.photoPost} alt="" />
        </div>
        <div className="futer-post">
            <div className="info-Text-Post">
                <details>
                    <summary className='name-post'>{post.post.namePost}<div className='help-post'>нажми чтобы прочесть</div></summary>
                    {post.post.textPost}
                </details>
            </div>
            <div className="futer-post-like-date">
                <div className="like-post">
                    <img className='like none' src={like} alt="" />
                    <img className='like' src={nolike} alt="" />
                </div>
                <div className="date-post">{date}</div>
            </div>
        </div>
    </div>
  );
}
export default Post;