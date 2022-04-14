import {useState} from "react"
import { getDatabase, onValue, ref } from "firebase/database";
import ViewMessege from "../messege/viewMesege";
import Loader from "../Loader/loader";
let listPost2 = []
let i = []

function SuportMassege() {
    setTimeout(() => {
        var block = document.getElementById("messegeList");
        block.scrollTop = 9999999999;
    }, 10)
    const[listPost, setPost] = useState(listPost2)  
    const database = getDatabase()
    onValue(ref(database, 'messege'), (snapshot) => {
    listPost2 = snapshot.val()
    if (listPost2.length == i.length){
    } else {
        setPost( listPost2 )
        i = listPost2
    }
    });
    function loader(){
        let loader = document.getElementById('loader-block')
        loader.className ='none'
      }
      setTimeout(loader, 2000);
    return (
        <div className="suport-messege-list">
            <div id="messegeList" className="blok-list-messege">
                <div id="loader-block">
                    <Loader/>
                </div>    
                {listPost.map(post =>
                    <ViewMessege post={post} key={post.id}/>
                )}
            </div>
        </div>
    );
}
    
  
export default SuportMassege;