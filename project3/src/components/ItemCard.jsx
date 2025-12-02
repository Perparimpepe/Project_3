function ItemCard({ item }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
