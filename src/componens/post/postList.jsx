import {useState} from "react"
import Post from "./post";
import { getDatabase, onValue, ref } from "firebase/database";

let listPost2 = []
let i = []
function PostList() {
    const[listPost, setPost] = useState(listPost2)  
    const database = getDatabase()
    onValue(ref(database, 'post'), (snapshot) => {
      listPost2 = snapshot.val()
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

export default PostList;