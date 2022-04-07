import Facul from "./facul";

function ListFuck() {
    let listFacul = [
        {id:"1"},
        {id:"1"},
        {id:"1"},
        {id:"1"},
        {id:"1"},
        {id:"1"},
        {id:"1"},
        {id:"1"},
        {id:"1"},
        {id:"1"},
    ]
  return (
    <div className="list-fucul">
        {listFacul.map(list =>
            <Facul/>
        )}
    </div>
  );
}

export default ListFuck;