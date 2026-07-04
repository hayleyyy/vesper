import galleryData from "./galleryData";
import GalleryItem from "./GalleryItem";

function Gallery() {
  return (
    <div className="masonry-gallery">
      {galleryData.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Gallery;
