import Facul from "./facul";
import {useState} from "react"
import { getDatabase, onValue, ref } from "firebase/database";

let listPost2 = []
let i = []

function ListFuck() {
      const[listPost, setPost] = useState(listPost2)  
      const database = getDatabase()
      onValue(ref(database, 'filter'), (snapshot) => {
        listPost2 = snapshot.val()
        if (listPost2.length == i.length){
        } else {
            setPost( listPost2 )
            i = listPost2
        }
      });
  return (
    <div className="list-fucul">
        {listPost.map(post =>
            <Facul key={post.key} post={post}/>
        )}
    </div>
  );
}

export default ListFuck;