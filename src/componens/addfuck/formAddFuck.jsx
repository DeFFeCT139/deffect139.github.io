import { get, getDatabase, onValue, ref, set } from "firebase/database";
import {useState} from "react"


function FormAddFuck() {
    function createFuck() {
        const db = getDatabase()
        let nameFuck = document.getElementById('nameFuck').value;
        let photoFuck = document.getElementById('photoFuck').value;
        document.getElementById('nameFuck').value = '';
        document.getElementById('photoFuck').value  = '';
        if (nameFuck.length !== 0 && photoFuck.length !== 0){
            get(ref(db, `fukul`)).then((snapshot) => {
                let MasMessege = Object.values(snapshot.val())
                let KallMessege = MasMessege.length
                set(ref(db, 'fukul/' + nameFuck), {
                    key: KallMessege,
                    nameFuck: nameFuck,
                    photoFuck: photoFuck,
                    sub: false,
                });
            })
        }
    }
  return (
    <div className="form-post">
        <div className="block-input-FP">
            <input id='nameFuck' className="input-FP" placeholder="Название факультета" type="text" />
            <input id="photoFuck" className="input-FP" placeholder="Фото факультута" type="text" />
        </div>
        <button onClick={createFuck} className="btn-FP">Добавить факультет</button>
    </div>
  );
}

export default FormAddFuck;