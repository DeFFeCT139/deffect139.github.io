import { get, getDatabase, onValue, ref, set } from "firebase/database";
import {useState} from "react"

function Facul({post, setFack}) {
  let state = false
  let id = post.id
  let id2 = post.id + "1"
  function FuckPostActiv() {
    if  (state == false){
      let classOdin = Object.values(document.getElementsByClassName('border-facul'))
      let classDva = Object.values(document.getElementsByClassName('krug-ava'))
      classDva.map(classD => {
        classD.className= 'avaFacul'
      })
      classOdin.map(classO => {
        classO.className= 'facul'
      })
      let block = document.querySelector('#' + id);
      block.className='facul border-facul';
      let blockImg = document.querySelector('#' + id2);
      blockImg.className='avaFacul krug-ava';
      state = true
      setFack(post.yourFuck)
    } else {
      let block = document.querySelector('#' + id);
      block.className='facul';
      let blockImg = document.querySelector('#' + id2);
      blockImg.className='avaFacul';
      state = false
    }
  }
  return (
    <div id={id} onClick={FuckPostActiv} className="facul">
      <img id={id2} src={post.photoFuck} className="avaFacul"/>
    </div>
  );
}

export default Facul;