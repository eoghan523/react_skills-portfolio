import GalleryCard from '../components/GalleryCard';
import cafe_de_flora from '../assets/images/cafe_de_flora.jpg';
import effiel1 from '../assets/images/effiel1.jpg';
import paris1 from '../assets/images/paris1.jpg';
import notredam from '../assets/images/notredam.jpg';
import french_art from '../assets/images/french_art.jpg';
import monalisa from '../assets/images/monalisa.jpg';
import louvre1 from '../assets/images/louvre1.jpg';
import louvre2 from '../assets/images/louvre2.jpg';

const Gallery = () => {
  const galleryImages = [
    { imageUrl: paris1, altText: 'Paris 1' },
    { imageUrl: cafe_de_flora, altText: 'Cafe de Flora' },
    { imageUrl: effiel1, altText: 'Eiffel 1' },
    { imageUrl: french_art, altText: 'French Art' },
    { imageUrl: effiel1, altText: 'Eiffel 1 (duplicate)' },
    { imageUrl: notredam, altText: 'Notre Dame' },
    { imageUrl: monalisa, altText: 'Mona Lisa' },
    { imageUrl: louvre1, altText: 'Louvre 1' },
    { imageUrl: louvre2, altText: 'Louvre 2' },
    // Add more images as needed
  ];

  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <GalleryCard key={index} imageUrl={image.imageUrl} altText={image.altText} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
