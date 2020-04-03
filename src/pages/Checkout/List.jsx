import React from "react";

const List = () => {
  return (
    <div>
      <h3>Products in Cart</h3>
      <ul id="list" className="list">
        <li>
          <span>First</span>
          <button className="delete-btn" style={{ backgroundColor: "#c0392b" }}>
            X
          </button>
        </li>
        <li>
          <span>First</span>
          <button className="delete-btn" style={{ backgroundColor: "#c0392b" }}>
            X
          </button>
        </li>
        <li>
          <span>First</span>
          <button className="delete-btn" style={{ backgroundColor: "#c0392b" }}>
            X
          </button>
        </li>
        <li>
          <span>First</span>
          <button className="delete-btn" style={{ backgroundColor: "#c0392b" }}>
            X
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
