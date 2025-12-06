//This page displays a list of persons, allows searching, editing, and deleting persons, and shows notifications for actions.
import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import ItemList from "../components/ItemList";
import { getAllItems, searchItems, deleteItem, updateItem } from "../services/api";
import { Modal, Button, Form } from "react-bootstrap";
import { Toast, ToastContainer } from "react-bootstrap";

// Home component to manage and display persons
function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [editMessage, setEditMessage] = useState("");
  const [editCountry, setEditCountry] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Fetch all items/persons on component mount
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
  // Handle search functionality
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
  // Handle deletion of an item/person
  const handleDelete = (id) => {
    deleteItem(id).then(() => {
      setItems((prev) => prev.filter((i) => i._id !== id));

      setToastMessage("Person deleted successfully!");
      setShowToast(true);
    });
  };

  // Open MODAL
  const handleEdit = (item) => {
    setCurrentItem(item);
    setEditMessage(item.message);
    setEditCountry(item.country);
    setShowModal(true);
  };

  // SAVE CHANGES
  const handleUpdate = () => {
    updateItem(currentItem._id, {...currentItem, message: editMessage, country: editCountry}).then(
      (updated) => {
        setItems((prev) =>
          prev.map((i) => (i._id === updated._id ? updated : i))
        );
        setShowModal(false);
      }
    );
  };

  return (
    <div className="main-container">     
      <h1 className="mb-4 text-center">List of Persons</h1>
        <h2 className="mb-4 text-center">This is only for testing purposes</h2>
      <SearchForm onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <ItemList items={items} onDelete={handleDelete} onUpdate={handleEdit} />

      {/* EDIT MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Person</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
                <Form.Label>Unit</Form.Label>
                <Form.Control
                    type="text"
                    value={editCountry}
                    onChange={(e) => setEditCountry(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                value={editMessage}
                onChange={(e) => setEditMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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

export default Home;
