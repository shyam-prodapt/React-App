import { useEffect } from 'react';
import oip from './OIP.webp';
import prodapt from './prodapt_img.webp';

export function renderGallery(containerId) {
  const images = [
    { src: oip, alt: 'OIP Image' },
    { src: prodapt, alt: 'Prodapt Image' },
  ];
  let current = 0;

  const container = document.getElementById(containerId);
  if (!container) return; // Avoid crash if container doesn't exist

  container.innerHTML = `
    <div style="text-align:center; margin-top:32px;">
      <h1>Gallery</h1>
      <div id="image-wrapper" style="position:relative; display:inline-block; margin:24px 0;">
        <img id="gallery-img" src="${images[current].src}" alt="${images[current].alt}"
          style="width:320px; height:200px; border-radius:10px; box-shadow:0 2px 12px #0002; object-fit:cover;" />
        <div style="margin-top:12px;">
          <button id="prev-btn" style="margin-right:16px; padding:6px 18px; border-radius:5px; border:none; background:#1976d2; color:#fff; cursor:pointer;">← Prev</button>
          <button id="next-btn" style="padding:6px 18px; border-radius:5px; border:none; background:#1976d2; color:#fff; cursor:pointer;">Next →</button>
        </div>
        <p id="img-caption" style="color:#555; margin-top:10px;">${images[current].alt}</p>
      </div>
    </div>
  `;

  document.getElementById('prev-btn').addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    updateImage();
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    current = (current + 1) % images.length;
    updateImage();
  });

  function updateImage() {
    document.getElementById('gallery-img').src = images[current].src;
    document.getElementById('gallery-img').alt = images[current].alt;
    document.getElementById('img-caption').textContent = images[current].alt;
  }
}

export default function Gallery() {
  useEffect(() => {
    renderGallery('gallery'); // ✅ Run after render
  }, []);

  return (
    <div id="gallery-container" style={{ padding: '20px' }}>
      <h1>Gallery Component</h1>
      <p>This is the gallery of your React application.</p>
      <div id="gallery"></div> {/* This exists before renderGallery is called */}
    </div>
  );
}
