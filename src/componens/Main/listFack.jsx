import Facul from "./facul";

function ListFuck() {
    let listFacul = [
        {id:"1"},
        {id:"2"},
        {id:"3"},
        {id:"4"},
        {id:"5"},
        {id:"6"},
        {id:"7"},
        {id:"8"},
        {id:"9"},
        {id:"10"},
    ]
  return (
    <div className="list-fucul">
        {listFacul.map(list =>
            <Facul key={list.id}/>
        )}
    </div>
  );
}

export default ListFuck;