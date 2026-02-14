import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BrowseItems() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [campus, setCampus] = useState("All");
  const [type, setType] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/items/all"
      );
      setItems(res.data);
      setFilteredItems(res.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // Filtering logic
  useEffect(() => {
    let data = items;

    if (search !== "") {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      data = data.filter(
        (item) =>
          item.category?.toLowerCase() ===
          category.toLowerCase()
      );
    }

    if (campus !== "All") {
      data = data.filter(
        (item) =>
          item.campus?.toLowerCase() ===
          campus.toLowerCase()
      );
    }

    if (type !== "All") {
      data = data.filter(
        (item) =>
          item.type?.toLowerCase() ===
          type.toLowerCase()
      );
    }

    setFilteredItems(data);
  }, [search, category, campus, type, items]);

  const handleClaim = () => {
    navigate("/claim", { state: selectedItem });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Browse Items</h1>

      {/* FILTERS */}
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.select}
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Accessories</option>
          <option>Bags</option>
          <option>Documents</option>
          <option>Others</option>
        </select>

        <select
          value={campus}
          onChange={(e) => setCampus(e.target.value)}
          style={styles.select}
        >
          <option>All</option>
          <option>Main Campus</option>
          <option>Library</option>
          <option>Hostel</option>
          <option>Cafeteria</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={styles.select}
        >
          <option>All</option>
          <option>Lost</option>
          <option>Found</option>
        </select>
      </div>

      {/* ITEM NAMES */}
      <div style={styles.list}>
        {filteredItems.map((item) => (
          <p
            key={item.id}
            style={styles.itemName}
            onClick={() => setSelectedItem(item)}
          >
            {item.title}
          </p>
        ))}
      </div>

      {/* DETAILS */}
      {selectedItem && (
        <div style={styles.details}>
          <h2>{selectedItem.title}</h2>
          <p><b>Category:</b> {selectedItem.category}</p>
          <p><b>Campus:</b> {selectedItem.campus}</p>
          <p><b>Type:</b> {selectedItem.type}</p>
          <p><b>Status:</b> {selectedItem.status}</p>

          <button
            style={styles.claimBtn}
            onClick={handleClaim}
          >
            Claim Item
          </button>
        </div>
      )}
    </div>
  );
}

export default BrowseItems;


// 🎨 Styles
const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#CAD183",
    minHeight: "100vh",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif"
  },

  title: {
    color: "#66023C",
    fontFamily: "Lobster, cursive",
    marginBottom: "20px"
  },

  filters: {
    marginBottom: "25px"
  },

  input: {
    padding: "8px",
    marginRight: "10px",
    borderRadius: "6px"
  },

  select: {
    padding: "8px",
    marginRight: "10px",
    borderRadius: "6px"
  },

  list: {
    background: "white",
    padding: "20px",
    width: "300px",
    margin: "auto",
    borderRadius: "10px"
  },

  itemName: {
    cursor: "pointer",
    padding: "10px",
    borderBottom: "1px solid #ccc"
  },

  details: {
    background: "white",
    padding: "20px",
    marginTop: "30px",
    width: "350px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "12px"
  },

  claimBtn: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#66023C",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};
