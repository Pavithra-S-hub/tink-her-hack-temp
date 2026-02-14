import React, { useState } from "react";
import axios from "axios";

function PostItem() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    campus: "",
    description: "",
    type: "Lost"
  });

  // ➜ Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ➜ Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending Data ➜", formData); // DEBUG LOG

    try {
      const res = await axios.post(
        "http://localhost:5000/api/items/add",
        formData
      );

      console.log("Server Response ➜", res.data);

      alert("Item Posted Successfully ✅");

      // Reset Form
      setFormData({
        title: "",
        category: "",
        campus: "",
        description: "",
        type: "Lost"
      });

    } catch (error) {
      console.error("POST ERROR ➜", error);

      alert("Error posting item ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          Post Lost / Found Item
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Item Title"
            value={formData.title}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* Campus */}
          <input
            type="text"
            name="campus"
            placeholder="Campus Location"
            value={formData.campus}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          {/* Type */}
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>

          <button style={styles.button}>
            Submit Item
          </button>

        </form>
      </div>
    </div>
  );
}

export default PostItem;


// 🎨 Styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#CAD183",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    textAlign: "center"
  },

  title: {
    color: "#66023C",
    fontFamily: "cursive",
    marginBottom: "20px"
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },

  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    height: "80px",
    fontSize: "14px"
  },

  button: {
    backgroundColor: "#66023C",
    color: "white",
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px"
  }
};
