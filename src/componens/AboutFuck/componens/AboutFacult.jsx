import { get, getDatabase, ref, set } from "firebase/database"

function AboutFacult({nameP}) {
    let id = 'active' +  nameP.key
    let id2 = 'active' + nameP.key +'1'
    let sub = nameP.sub
    setTimeout(()=> {
    if(sub == true){
        let messege = document.querySelector('#'+id)
        messege.className="btnFuc"
        let sub = document.querySelector('#'+id2)
        sub.className="btnFuc none"
    } else{
        let messege = document.querySelector('#'+id)
        messege.className="btnFuc none"
        let sub = document.querySelector('#'+id2)
        sub.className="btnFuc"
    }
    },50)
    function Btnsub() {
        const db = getDatabase()
        let messege = document.querySelector('#'+id)
        messege.className="btnFuc"
        let sub = document.querySelector('#'+id2)
        sub.className="btnFuc none"
        get(ref(db, `filter`)).then((snapshot) => {
            let MasMessege = snapshot.val();
            let KallMessege = MasMessege.length
            set(ref(db, 'filter/' + String(KallMessege)), {
                id: 'fuckul' + KallMessege,
                key: KallMessege,
                state: true, 
                photoFuck: nameP.photoFuck,
                yourFuck:{
                    one:false,
                    two:false,
                    free:true,
                    name: nameP.nameFuck,
                }
            });
        })
        get(ref(db, `post`)).then((snapshot) => {
            let MasMessege = snapshot.val();
            let SetMessege = MasMessege.filter((mess)=> mess.nameFuck == nameP.nameFuck)
            SetMessege.map(setmas => {
                set(ref(db, 'post/' + setmas.key + '/subscribe'),true);
            })
        })
        set(ref(db, 'fukul/' + nameP.nameFuck + '/sub'), true);
    }
    return (
      <div className="about-fuck">
        <div className="photo-fuck">
            <img className="photo-fuck-img" src={nameP.photoFuck} alt="" />
        </div>  
        <div className="info-fuck">
            <div className="info-block-fuck">
                <img className="photo-fuck-ava" src={nameP.photoFuck} alt="" />
                <div className="nameFacult">{nameP.nameFuck}</div>
            </div>
            <div className="btn-block-fuck">
                <button id={id} className="btnFuc none">Написать сообщение</button>
                <button id={id2} className="btnFuc" onClick={Btnsub}>Подписаться</button>
            </div>
        </div>  
      </div>
    );
  }

export default AboutFacult;