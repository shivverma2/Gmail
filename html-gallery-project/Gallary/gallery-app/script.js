const images = Array.from({length: 30}, (_, i) => `https://picsum.photos/seed/gallery${i+1}/400/300`);
const gallery = document.getElementById('gallery');
images.forEach((src, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${idx+1}`;
    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = `Image ${idx+1}`;
    item.appendChild(img);
    item.appendChild(caption);
    gallery.appendChild(item);
});
