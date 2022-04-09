import { get, getDatabase, ref, set } from "firebase/database";


function FormPost() {
    function createPost() {
        let date = String(new Date())
        let selectFP = document.getElementById('select-FP').value;
        let temPost = document.getElementById('temPost').value;
        let textPost = document.getElementById('textPost').value;
        let photoPost = document.getElementById('photoPost').value;
        let photoFuck = 0
        const db = getDatabase();
        get(ref(db, 'fukul/' + selectFP + '/photoFuck')).then((snapshot) => {
            photoFuck = snapshot.val();
        })
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
    }
  return (
    <div className="form-post">
        <div className="selet-FP">
            <select id='select-FP' className="slt-FP">
                <option>Выбирите факультет</option>
                <option>II</option>
                <option>IT</option>
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