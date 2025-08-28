const photos = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
    'photo5.jpg',
    'photo6.jpg',
    'photo7.jpg',
    'photo8.jpg',
    'photo9.jpg',
    'photo10.jpg',
    'photo11.jpg',
    'photo12.jpg',
    'photo13.jpg',
    'photo14.jpg',
    'photo15.jpg',
    'photo16.jpg',
    'photo17.jpg',
    'photo18.jpg',
    'photo19.jpg',
    'photo20.jpg'
];

const galleryContainer = document.getElementById('gallery');

photos.forEach(photo => {
    const imgElement = document.createElement('img');
    imgElement.src = photo;
    imgElement.alt = 'Gallery Image';
    imgElement.classList.add('gallery-image');
    
    imgElement.addEventListener('click', () => {
        openModal(photo);
    });

    galleryContainer.appendChild(imgElement);
});

function openModal(photo) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    const modalImg = document.createElement('img');
    modalImg.src = photo;
    modalImg.classList.add('modal-content');
    
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        modal.remove();
    });

    modal.appendChild(closeButton);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
}