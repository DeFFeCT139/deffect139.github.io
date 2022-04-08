function ViewMessege(post) {
    let dateMas = new Date(post.post.time)
    let hours = dateMas.getHours(); // 10
    let min = dateMas.getMinutes(); // 0
    var date = String(hours + ':'+ min )
    return (
        <div className="view-messege">
            <div className="text-massege">{post.post.textMesege}</div>
            <div className="time-massege">{date}</div>
        </div>
    );
}
    
  
export default ViewMessege;