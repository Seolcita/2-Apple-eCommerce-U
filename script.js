/** @format */

// Slideshow
const slideShowContainer = document.querySelector('.slideshow');

const slideShow = () => {
  for (let i = 1; i <= 5; i++) {
    const slideShowDiv = document.createElement('div');
    slideShowDiv.style.backgroundImage = `url(images/slideshow/hero-${i}.jpg)`;
    slideShowContainer.appendChild(slideShowDiv);
  }
};

slideShow();
