import { get, getDatabase, ref, set } from 'firebase/database'
import like from '../../img/favorite_black_24dp.svg'
import nolike from '../../img/favorite_border_black_24dp.svg'


function Post(post) {
    let key = post.post.key
    //перевожу время на посте 
    let id1 = post.post.id
    let id2 = post.post.id + '10'
    let dateMas = new Date(post.post.date)
    let month = Number(dateMas.getMonth()) + 1
    let day = dateMas.getDate()
    let hours = dateMas.getHours(); // 10
    let min = dateMas.getMinutes(); // 0
    var date = String(day +"."+'0'+ String(month) + " "+ hours + ':'+ min )

    //добавляю значение like
    let likeState = post.post.like
    setTimeout(() => {
        if (likeState == true) {
            var nam = document.querySelector('#'+id2);
            nam.className = 'like none';
            var nam = document.querySelector('#'+id1);
            nam.className = 'like';
        } else {
            var nam = document.querySelector('#'+id2);
            nam.className = 'like';
            var nam = document.querySelector('#'+id1);
            nam.className = 'like none';
        }
    }, 100)

    //делаю рабочими лайки
    function BtnLike(){
        const dbRef = getDatabase();
        //запрышиваю значение like из bd
        get(ref(dbRef, 'post/'+ key +'/like')).then((snapshot) => {
            let likeCount = snapshot.val();
            if (likeCount == false) {
                var nam = document.querySelector('#'+id2);
                nam.className = 'like none';
                var nam = document.querySelector('#'+id1);
                nam.className = 'like';
                // изменяю его значение
                set(ref(dbRef, 'post/'+ key +'/like'), true);
            } else {
                var nam = document.querySelector('#'+id2);
                nam.className = 'like';
                var nam = document.querySelector('#'+id1);
                nam.className = 'like none';
                // изменяю его значение
                set(ref(dbRef, 'post/'+ key +'/like'), false);
            }
        })
    }
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
                <div onClick={BtnLike} className="like-post">
                    <img id={id1} className='like none' src={like} alt="" />
                    <img id={id2} className='like' src={nolike} alt="" />
                </div>
                <div className="date-post">{date}</div>
            </div>
        </div>
    </div>
  );
}
export default Post;