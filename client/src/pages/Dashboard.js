import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Dashboard</h1>

      <div style={styles.grid}>
        
        {/* Post Item */}
        <div
          style={styles.card}
          onClick={() => navigate("/post")}
        >
          <h2>📌 Post Item</h2>
          <p>Report a lost or found item</p>
        </div>

        {/* Browse Items */}
        <div
          style={styles.card}
          onClick={() => navigate("/browse")}
        >
          <h2>🔍 Browse Items</h2>
          <p>View all lost & found items</p>
        </div>

        {/* Claims */}
        <div
  style={styles.card}
  onClick={() => navigate("/view-claims")}
>
  <h2>📄 View Requests</h2>
  <p>View all claimed items</p>
</div>


      </div>
    </div>
  );
}

export default Dashboard;

const styles = {
  page: {
    background: "#CAD183",
    minHeight: "100vh",
    padding: "40px",
  },
  title: {
    textAlign: "center",
    fontSize: "40px",
    color: "#66023C",
    marginBottom: "40px",
    fontFamily: "cursive",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "250px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "0.3s",
  },
};
