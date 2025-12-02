import ItemCard from "./ItemCard";

function ItemList({ items }) {
  if (!items || items.length === 0) return <p>No items found.</p>;

  return (
    <div>
      {items.map((item) => (
        <ItemCard key={item.id || item._id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
