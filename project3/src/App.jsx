import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import ItemList from "./components/ItemList";
import { getAllItems, searchItems } from "./services/api";

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

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Project 3 Frontend</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <ItemList items={items} />
    </div>
  );
}

export default App;

