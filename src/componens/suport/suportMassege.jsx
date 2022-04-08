import {useState} from "react"
import { getDatabase, onValue, ref } from "firebase/database";
import ViewMessege from "../messege/viewMesege";
let listPost2 = []
let i = []

function SuportMassege() {
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
    return (
        <div className="suport-messege-list">
            <div className="blok-list-messege">
                {listPost.map(post =>
                    <ViewMessege post={post} key={post.id}/>
                )}
            </div>
        </div>
    );
}
    
  
export default SuportMassege;