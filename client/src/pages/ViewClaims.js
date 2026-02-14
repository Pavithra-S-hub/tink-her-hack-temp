import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewClaims() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    fetchClaims();
  }, []);

  const fetchClaims = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/claims/all"
      );

      setClaims(res.data);

    } catch (error) {
      console.error("Error fetching claims:", error);
    }
  };

  return (
    <div style={styles.container}>

      <h1>Claimed Items</h1>

      {claims.length === 0 ? (
        <p>No claims submitted yet</p>
      ) : (
        claims.map((claim) => (
          <div key={claim.id} style={styles.card}>

            <h3>{claim.itemName}</h3>

            <p>
              <b>Claimed By:</b> {claim.name}
            </p>

            <p>
              <b>Contact:</b> {claim.contact}
            </p>

            <p>
              <b>Proof:</b> {claim.proof}
            </p>

            <p>
              <b>Status:</b> {claim.status}
            </p>

          </div>
        ))
      )}

    </div>
  );
}

export default ViewClaims;


const styles = {
  container: {
    padding: "40px",
    background: "#EDE7F6",
    minHeight: "100vh",
    textAlign: "center"
  },

  card: {
    background: "white",
    padding: "20px",
    margin: "15px auto",
    width: "350px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }
};
