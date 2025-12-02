const API_URL = "https://project-2-269q.onrender.com";

export async function getAllItems() {
  const res = await fetch(`${API_URL}/items`);
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

export async function searchItems(query) {
  const res = await fetch(`${API_URL}/items/search?q=${query}`);
  if (!res.ok) throw new Error("Failed to search items");
  return res.json();
}