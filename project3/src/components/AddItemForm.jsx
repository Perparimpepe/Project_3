import { useState } from "react";

function AddItemForm({ onAdd }) {
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ username, country, message });
    setUsername(""); setCountry(""); setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-success">Add Item</button>
    </form>
  );
}

export default AddItemForm;