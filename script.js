// Carousel Logic
const carouselTrack = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');
const nextBtn = document.querySelector('.next-btn');
let index = 0;

function showNextCard() {
  index = (index + 1) % cards.length;
  carouselTrack.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', showNextCard);
setInterval(showNextCard, 3000);

// Intro Screen Fade and Show Main Content
setTimeout(() => {
  const introScreen = document.querySelector('.intro-screen');
  if (introScreen) {
    introScreen.classList.add('hidden');
  }
  document.getElementById('main-content').style.display = 'block';
}, 2000);
