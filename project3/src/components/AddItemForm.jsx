// This component renders a form to add a new item with fields for name, unit, and position.
import { useState } from "react";

function AddItemForm({ onAdd, duplicateError }) {
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ username, country, message });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">

      {/* NAME FIELD */}
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`form-control form-control-lg mb-1 shadow-sm ${
          duplicateError ? "is-invalid" : ""
        }`}
      />

      {duplicateError && (
        <div className="text-danger mb-3">This person already exists.</div>
      )}

      {/* UNIT */}
      <input
        type="text"
        placeholder="Unit"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="form-control form-control-lg mb-3 shadow-sm"
      />

      {/* POSITION */}
      <input
        type="text"
        placeholder="Position"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-control form-control-lg mb-3 shadow-sm"
      />

      <button type="submit" className="btn btn-success">Add Person</button>
    </form>
  );
}

export default AddItemForm;
