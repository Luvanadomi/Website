const photo = document.querySelector('.photo-container');
const prev = document.getElementById('previous');
const next = document.getElementById('next');
let currentPhoto = 0;
const totalPhotos = 5;

next.addEventListener('click', () => {
  const totalItems = photo.children.length;
  if (currentPhoto < totalItems - totalPhotos) {
    currentPhoto++;
    slideSlider();
  }
});

prev.addEventListener('click', () => {
  if ( currentPhoto > 0) {
    currentPhoto--;
    slideSlider();
  }
});

function slideSlider() {
  const translate = - currentPhoto * (100 / totalPhotos);
  photo.style.transform = `translateX(${translate}%)`;
}