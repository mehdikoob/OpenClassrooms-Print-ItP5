// Définition de l'index du slide et de la liste des slides
let slideIndex = 0;
const slides = ['./assets/images/slideshow/slide1.jpg',
'./assets/images/slideshow/slide2.jpg',
'./assets/images/slideshow/slide3.jpg',
'./assets/images/slideshow/slide4.png'];

// Appel de la fonction showSlide au chargement de la page
window.onload = () => showSlide(slideIndex);

// Fonction pour afficher le slide à l'index n
function showSlide(n) {
  // Changer l'image du slide
  document.querySelector('#banner .banner-img').src = slides[n];
  
  // Changer le point sélectionné sous le slide
  [...document.querySelectorAll('.dot')].map((dot, i) => dot.classList.toggle('dot_selected', i === n));
}

// Fonction pour changer le slide de n positions
function changeSlide(n) {
  // Modifie l'index du slide et s'assure qu'il reste dans les limites de la liste des slides
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  
  // Affiche le slide à l'index actuel
  showSlide(slideIndex);
}

// Ajout des gestionnaires d'événements pour les flèches
['.arrow_left', '.arrow_right'].forEach((selector, i) => {
  // Sélection de la flèche
  const arrow = document.querySelector(`#banner ${selector}`);
  
  // Change le curseur quand on passe la souris sur la flèche
  arrow.style.cursor = 'pointer';
  
  // Ajout de l'événement de clic sur la flèche
  arrow.addEventListener('click', () => changeSlide(i === 0 ? -1 : 1)); // si i == 0, alors on est sur la flèche gauche donc n == -1, sinon n == 1
});
