import { get, getDatabase, onValue, ref, set } from "firebase/database";
import {useState} from "react"
import Fuckultet from "./Fuckultet";

let listPost2 = []
let i = []

function ListFuck() {
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
  return (
    <div className="block-fuck">
        {listPost.map(post =>
            <Fuckultet post={post} key={post.key}/>
        )}
    </div>
  );
}

export default ListFuck;