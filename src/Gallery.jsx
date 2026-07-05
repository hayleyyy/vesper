import galleryData from "./galleryData";
import GalleryItem from "./GalleryItem";
import { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const images = selectedItem?.gallery ?? (selectedItem ? [selectedItem] : []);
  return (
    <>
      {selectedItem && (
        <div className="gallery-container">
          <button
            className="close-button"
            onClick={() => setSelectedItem(null)}
          >
            Close
          </button>

          <div className="gallery-detail">
            <Row>
              <Col md="7" lg="6">
                {images.map((image) => (
                  <div key={image.id} className="detail-image">
                    <a href={image.full} target="_blank" rel="noreferrer">
                      <img src={image.thumb} alt={image.title} />
                    </a>

                    {image.description && <p>{image.description}</p>}
                  </div>
                ))}
              </Col>
              <Col md="5" lg="6">
                <h1>{selectedItem.title}</h1>

                <p>{selectedItem.description}</p>
                <a href={selectedItem.full} target="_blank" rel="noreferrer">
                  View Full Resolution
                </a>
              </Col>
            </Row>
          </div>
        </div>
      )}

      <div className="masonry-gallery" id="gallery">
        {galleryData.map((item) => (
          <GalleryItem key={item.id} item={item} onSelect={setSelectedItem} />
        ))}
      </div>
    </>
  );
}

export default Gallery;
