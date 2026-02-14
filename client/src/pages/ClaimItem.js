import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ClaimItem() {
  const location = useLocation();
  const item = location.state;

  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!contact) {
      alert("Please enter contact number");
      return;
    }

    alert("Claim submitted successfully!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.title}>Claim Request</h2>

        {item ? (
          <>
            {/* Item Name */}
            <p style={styles.itemName}>
              Claiming: {item.title}
            </p>

            {/* Contact Number */}
            <label style={styles.label}>
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              style={styles.input}
            />

            {/* Proof Upload */}
            <label style={styles.label}>
              Upload Proof
            </label>
            <input type="file" style={styles.input} />

            {/* Description */}
            <label style={styles.label}>
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe proof..."
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              style={styles.textarea}
            />

            {/* Submit */}
            <button
              style={styles.button}
              onClick={handleSubmit}
            >
              Submit Claim
            </button>
          </>
        ) : (
          <p>No item selected</p>
        )}

      </div>
    </div>
  );
}

export default ClaimItem;



// 🎨 Styles
const styles = {
  container: {
    backgroundColor: "#CAD183",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif"
  },

  card: {
    background: "white",
    padding: "30px",
    width: "350px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },

  title: {
    color: "#66023C",
    fontFamily: "Lobster, cursive",
    textAlign: "center",
    marginBottom: "20px"
  },

  itemName: {
    fontWeight: "bold",
    marginBottom: "15px"
  },

  label: {
    display: "block",
    marginTop: "10px",
    marginBottom: "5px"
  },

  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  button: {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    backgroundColor: "#66023C",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};
