//This component renders a list of items using the ItemCard component for each item.

import ItemCard from "./ItemCard";

function ItemList({ items, onDelete, onUpdate }) {
  if (!items || items.length === 0) return <p>No persons found.</p>;

  return (
    <div>
      {items.map((item) => (
        <ItemCard
          key={item._id}
          item={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default ItemList;
