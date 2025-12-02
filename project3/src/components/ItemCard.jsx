function ItemCard({ item, onDelete, onUpdate }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{item.username}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.country}</h6>
        <p className="card-text">{item.message}</p>
        <small className="text-muted">{new Date(item.date).toLocaleString()}</small>
        <div className="mt-2">
          <button className="btn btn-danger btn-sm me-2" onClick={() => onDelete(item._id)}>Delete</button>
          <button className="btn btn-warning btn-sm" onClick={() => onUpdate(item)}>Edit</button>
        </div>
      </div>
    </div>
  );
}


export default ItemCard;
