//This page allows users to add a new person while checking for duplicates and providing feedback via toast notifications.
import AddItemForm from "../components/AddItemForm";
import { addItem, getAllItems } from "../services/api";
import { useState, useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function AddItemPage() {
  const [items, setItems] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [duplicateError, setDuplicateError] = useState(false);

  // Fetch items for duplicate checking
  useEffect(() => {
    getAllItems().then((data) => setItems(data));
  }, []);

  const handleAdd = (item) => {
    const alreadyExists = items.some(
      (i) => i.username.toLowerCase() === item.username.toLowerCase()
    );

    if (alreadyExists) {
      setDuplicateError(true);
      setToastMessage("Person already exists!");
      setShowToast(true);
      return;
    }

    setDuplicateError(false);

    addItem(item).then((newItem) => {
      setItems((prev) => [...prev, newItem]);
      setToastMessage("Person added successfully!");
      setShowToast(true);
    });
  };
  // Render the AddItemPage component
  return (
    <div>
      <h1 className="mb-4">Add New Person</h1>

      <AddItemForm onAdd={handleAdd} duplicateError={duplicateError} />

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
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default AddItemPage;
