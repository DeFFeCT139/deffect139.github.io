import {useState} from "react"
import Post from "./post";
import { getDatabase, onValue, ref } from "firebase/database";

let listPost2 = []
let i = []
function PostListLike() {
    const[listPost, setPost] = useState(listPost2)  
    const database = getDatabase()
    onValue(ref(database, 'post'), (snapshot) => {
      let listPost3 = snapshot.val()
      listPost2 = listPost3.filter((list) => list.like == true)
      if (listPost2.length == i.length){
      } else {
          setPost( listPost2 )
          i = listPost2
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

export default PostListLike;