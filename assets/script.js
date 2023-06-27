// Index du slide actuel
let slideIndex = 0;

// Chemin des slides
const slides = [
  './assets/images/slideshow/slide1.jpg',
  './assets/images/slideshow/slide2.jpg',
  './assets/images/slideshow/slide3.jpg',
  './assets/images/slideshow/slide4.png'
];

// Afficher le premier slide à l'ouverture de la page
window.onload = function() {
  showSlide(slideIndex);
};

// Afficher le slide correspondant à l'index
function showSlide(n) {
  const img = document.querySelector('#banner .banner-img');
  img.src = slides[n];
  updateDots(n);
}

// Mettre à jour les "dots" en fonction du slide actuel
function updateDots(n) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('dot_selected');
    if (index === n) {
      dot.classList.add('dot_selected');
    }
  });
}

// Changer de slide
function changeSlide(n) {
  slideIndex += n;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

// Listener pour le bouton précédent
document.querySelector('#banner .arrow_left').addEventListener('click', function() {
  changeSlide(-1);
});

// Listener pour le bouton suivant
document.querySelector('#banner .arrow_right').addEventListener('click', function() {
  changeSlide(1);
});
