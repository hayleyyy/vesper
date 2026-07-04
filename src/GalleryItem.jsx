import React from "react";
import "reactstrap";
import { Container, Row, Col, Button } from "reactstrap";

function GalleryItem({ item }) {
  return (
    <div className="gallery-item">
      <a href={item.full} target="_blank" rel="noreferrer">
        <img src={item.thumb} alt={item.title} loading="lazy" />
      </a>

      <div className="gallery-info">
        <h2>{item.title}</h2>

        {item.description && <p>{item.description}</p>}

        {item.medium && <span>{item.medium}</span>}
      </div>
    </div>
  );
}

export default GalleryItem;
