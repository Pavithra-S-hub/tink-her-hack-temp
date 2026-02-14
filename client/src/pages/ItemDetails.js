import React from "react";

function ItemDetails({ item, showClaimButton }) {

  if (!item) {
    return null;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Item Details</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        {/* Details */}
        <div>
          <h3>{item.title}</h3>

          <p>
            <b>Description:</b> {item.description}
          </p>

          <p>
            <b>Category:</b> {item.category}
          </p>

          <p>
            <b>Campus:</b> {item.campus}
          </p>

          <p>
            <b>Status:</b>{" "}
            <span
              style={{
                color:
                  item.type === "lost"
                    ? "red"
                    : "green",
              }}
            >
              {item.type.toUpperCase()}
            </span>
          </p>

          {/* CLAIM BUTTON (Conditional) */}
          {showClaimButton && (
            <button>Claim Item</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
