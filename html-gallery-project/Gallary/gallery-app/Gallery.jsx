import React from 'react';
import './style.css';

const images = Array.from({length: 30}, (_, i) => `https://picsum.photos/seed/gallery${i+1}/400/300`);

export default function Gallery() {
  return (
    <div className="gallery">
      {images.map((src, idx) => (
        <div className="gallery-item" key={idx}>
          <img src={src} alt={`Image ${idx+1}`} />
          <div className="caption">Image {idx+1}</div>
        </div>
      ))}
    </div>
  );
}
