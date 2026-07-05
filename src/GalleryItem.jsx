import React from "react";
import "reactstrap";
import { Container, Row, Col, Button } from "reactstrap";

function GalleryItem({ item, onSelect }) {
  return (
    <div className="gallery-item" onClick={() => onSelect(item)}>
      <img src={item.thumb} alt={item.title} loading="lazy" />

      <div className="gallery-info">
        <h3>{item.title}</h3>
      </div>
    </div>
  );
}

export default GalleryItem;
