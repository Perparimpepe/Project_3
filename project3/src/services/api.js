//This file contains functions to interact with the backend API for CRUD operations.
const API_URL = import.meta.env.VITE_API_URL;

export async function getAllItems() {
  const res = await fetch(`${API_URL}/getall`);
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

export async function getItemById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch item");
  return res.json();
}

// exmple of an additional function
export async function searchItems(query) {
  const allItems = await getAllItems();
  // Suodatus vain itemeille, joilla on 'name'
  return allItems.filter(item => item.username && item.username.toLowerCase().includes(query.toLowerCase()));
}

export async function addItem(newItem) {
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  });
  if (!res.ok) throw new Error("Failed to add item");
  return res.json();
}

export async function deleteItem(id) {
  const res = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Failed to delete item");
  return res.json();
}

export async function updateItem(id, updatedData) {
  const res = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });
  if (!res.ok) throw new Error("Failed to update item");
  return res.json();
}
