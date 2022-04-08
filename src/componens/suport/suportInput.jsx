import btnMessege from '../../img/send_black_24dp.svg'
import btnAttech from '../../img/attach_file_black_24dp.svg'
import { get, getDatabase, ref, set } from 'firebase/database';
let MasMessege = []
function SuportInput() {
    function editMessage() {
        let time = String(new Date())
        let Messege = document.getElementById("msessegeInput").value;
        if (Messege.length == 0){
        } else {
            document.getElementById("msessegeInput").value = '';
            const db = getDatabase();
            get(ref(db, `messege`)).then((snapshot) => {
                MasMessege = snapshot.val();
                let KallMessege = MasMessege.length
                set(ref(db, 'messege/' + String(KallMessege)), {
                    textMesege: Messege,
                    time: time,
                });
            })
        }
    }
    return (
      <div className="suport-input">
          <div className="btn-attech-sprt">
              <img className="btn-attech-ico" src={btnAttech} alt="" />
          </div>
          <div className="input-sptr">
              <input id="msessegeInput" placeholder='Напишите сообщение' className="input-sptr-style" type="text" />
          </div>
          <div onClick={editMessage} className="btn-messege-sprt">
              <img className="btn-messege-ico" src={btnMessege} alt="" />
          </div>
      </div>
    );
  }
  
  export default SuportInput;