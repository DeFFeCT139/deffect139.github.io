import {useState} from "react"
import Post from "./post";
import { getDatabase, onValue, ref } from "firebase/database";

let listPost3 = []
let her ="IT"
let i = []
let subState = true
let all = false
let certain = false
function PostList({prop}) {
    subState = prop.one
    all = prop.two
    certain = prop.free
    her = prop.name
    const[listPost, setPost] = useState(listPost3)  
    const database = getDatabase()
    onValue(ref(database, 'post'), (snapshot) => {
      let listPost2 = snapshot.val()
      if (subState == true){
        let listPost4 = listPost2.filter((listPost5) => listPost5.subscribe == true)
        listPost3 = listPost4.filter((listPost5) => listPost5.nameFuck == listPost5.nameFuck)
      } else {
        if (all == true){
          listPost3 = listPost2
        } else {
          if(certain == true){
            let listPost4 = listPost2.filter((listPost5) => listPost5.subscribe == true)
            listPost3 = listPost4.filter((listPost5) => listPost5.nameFuck == her)
          }
        }
      }
      if (listPost3.length == i.length){
      } else {
          setPost( listPost3)
          i = listPost3
      }
    });
  return (
    <div>
        {listPost.map(post =>
            <Post post={post} key={post.id}/>
        ).reverse()}
    </div>
  );
}

export default PostList;