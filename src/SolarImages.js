import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SunImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    const query = "sun";
    const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      const items = data.collection.items;
      const imageUrls = items.map(item => item.links[0].href);
      setImages(imageUrls);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="sun-image-carousel">
      <h2>Images taken from Nasa's image library</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {images.length > 0 && (
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          {images.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Sun image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default SunImageCarousel;
