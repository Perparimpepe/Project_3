import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import { getAllItems, searchItems, addItem, deleteItem, updateItem } from "./services/api";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllItems()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    setLoading(true);
    searchItems(query)
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleAdd = (item) => {
    addItem(item).then(newItem => {
      setItems(prev => [newItem, ...prev]);
    });
  };

  const handleDelete = (id) => {
    deleteItem(id).then(() => {
      setItems(prev => prev.filter(i => i._id !== id));
    });
  };

  const handleUpdate = (item) => {
    const updatedMessage = prompt("Edit message:", item.message);
    if (updatedMessage !== null) {
      updateItem(item._id, { ...item, message: updatedMessage }).then(updated => {
        setItems(prev => prev.map(i => i._id === updated._id ? updated : i));
      });
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Project 3 Frontend</h1>
      <AddItemForm onAdd={handleAdd} />
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <ItemList items={items} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;