//This component provides a form to add a new item with fields for name, unit, and position.

import { useState } from "react";

function AddItemForm({ onAdd }) {
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  // HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ username, country, message });
    setUsername(""); setCountry(""); setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Unit"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Position"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-success">Add Person</button>
    </form>
  );
}

export default AddItemForm;