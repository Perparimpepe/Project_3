//This page allows users to add a new person and shows a success notification upon addition.

import AddItemForm from "../components/AddItemForm";
import { addItem } from "../services/api";
import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";


function AddItemPage() {
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Handle addition of a new item/person
  const handleAdd = (item) => {
    addItem(item).then(() => {
    setToastMessage("Person added successfully!");
    setShowToast(true);
    });
  };

  // Render the add item/person form and toast notification
  return (
    <div>
      <h1 className="mb-4">Add New Person</h1>
      {message && <p className="text-success">{message}</p>}
      <AddItemForm onAdd={handleAdd} />
      <ToastContainer position="bottom-end" className="p-3">
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default AddItemPage;
