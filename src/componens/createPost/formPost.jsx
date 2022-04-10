import { get, getDatabase, onValue, ref, set } from "firebase/database";
import {useState} from "react"

let listPost2 = []
let i = []
function FormPost() {
    const[listPost, setPost] = useState(listPost2)  
    const database = getDatabase()
    onValue(ref(database, 'fukul'), (snapshot) => {
      listPost2 = Object.values(snapshot.val())
      if (listPost2.length == i.length){
      } else {
          setPost( listPost2 )
          i = listPost2
      }
    });
    function createPost() {
        let date = String(new Date())
        let selectFP = document.getElementById('select-FP').value;
        let temPost = document.getElementById('temPost').value;
        let textPost = document.getElementById('textPost').value;
        let photoPost = document.getElementById('photoPost').value;
        let photoFuck = 0
        document.getElementById('temPost').value = '';
        document.getElementById('textPost').value  = '';
        document.getElementById('photoPost').value  = '';

        const db = getDatabase();
        get(ref(db, 'fukul/' + selectFP + '/photoFuck')).then((snapshot) => {
            photoFuck = snapshot.val();
        })

        setTimeout(()=> {
            if (selectFP !== 'Выбирите факультет' &&  temPost.length !== 0 && textPost.length !== 0){
                get(ref(db, `post`)).then((snapshot) => {
                    let MasMessege = snapshot.val();
                    let KallMessege = MasMessege.length
                    set(ref(db, 'post/' + String(KallMessege)), {
                        date: date,
                        id: 'one' + KallMessege,
                        key: KallMessege,
                        like: false,
                        nameFuck: selectFP,
                        namePost: temPost,
                        photoFuck: photoFuck,
                        photoPost: photoPost,
                        textPost: textPost,
                    });
                })
            }
        }, 200)
    }
  return (
    <div className="form-post">
        <div className="selet-FP">
            <select id='select-FP' className="slt-FP">
                <option>Выбирите факультет</option>
                {listPost.map(post2 =>
                    <option key={post2.key}>{post2.nameFuck}</option>
                )}
            </select>
        </div>
        <div className="block-input-FP">
            <input id='temPost' className="input-FP" placeholder="Тема поста" type="text" />
            <textarea id='textPost' className="input-FP textarea-FP"placeholder="Информация в посте" type="text" />
            <input id="photoPost" className="input-FP" placeholder="Фото поста" type="text" />
        </div>
        <button onClick={createPost} className="btn-FP">Добавить пост</button>
    </div>
  );
}

export default FormPost;