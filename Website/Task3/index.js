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





document.addEventListener('DOMContentLoaded', function() {
  const wholesale  = document.querySelector('.wholesale');
  const featureContainer = document.querySelector('.feature-container');

  wholesale.addEventListener('click', function() {
    featureContainer.style.display = (featureContainer.style.display === 'flex') ? 'none' : 'flex';
  });
});


const hamburger  = document.querySelector('.hamburger-menu');  
hamburger.onclick = function (){
   
  const leftMobile = document.querySelector('.responsive-menu');
  leftMobile.classList.toggle('active'); 

  const wholesaleResponsive= document.querySelector('.wholesale-button');
  const menu = document.querySelector('.main-button');

  wholesaleResponsive.addEventListener('click', function() {
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  });

}

const tattoo = document.querySelector('.tattoo-button');
const menu2 = document.querySelector('.dropdown');

tattoo.addEventListener('click', function() {
  menu2.style.display = (menu2.style.display === 'flex') ? 'none' : 'flex';
});

 