import React from "react";
import Card from "antd/es/card/Card";

function Card({ title, description, category }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default Card;
