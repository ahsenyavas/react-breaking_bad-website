import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="quote_item">
      <Link to={`/quotes/${item.quote_id}`}>
        <q>{item.quote}</q> <strong>{item.author}</strong>
      </Link> {' '}
    </div>
  );
}

export default Item;
