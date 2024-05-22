import React, { useState, useEffect } from "react";

const SunImage = () => {
  const [imageIndex, setImageIndex] = useState(0);
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
      const imageUrls = items.map((item) => item.links[0].href);
      setImages(imageUrls);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNextImage = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="sun-image-container">
      <h2>Images taken from Nasa's image library</h2>
      {error && <p className="error">{error}</p>}
      {images.length > 0 && (
        <div>
          <img src={images[imageIndex]} alt={`Sun image ${imageIndex + 1}`} />
          <div className="button-container">
          <button className="button" onClick={handleNextImage}>Next Image</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SunImage;
