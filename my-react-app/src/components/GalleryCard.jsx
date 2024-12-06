const GalleryCard = ({ imageUrl, altText }) => {
    return (
      <div className="gallery-card">
        <img src={imageUrl} alt={altText} />
      </div>
    );
  };
  
  export default GalleryCard;
  