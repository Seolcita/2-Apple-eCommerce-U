/** @format */
// ------------- Slideshow -------------

// Slideshow - Create div with background
const slideShowContainer = document.querySelector('.slideshow');

const slideShow = () => {
  for (let i = 1; i <= 5; i++) {
    const slideShowDiv = document.createElement('div');
    slideShowDiv.style.backgroundImage = `url(images/slideshow/hero-${i}.jpg)`;

    i === 1 && slideShowDiv.classList.add('change');

    slideShowContainer.appendChild(slideShowDiv);
  }
};

slideShow();

// Slideshow - Run slideshow infinitely

const allDivs = document.querySelectorAll('.slideshow div');

let a = 1;

const runSlideShow = () => {
  setInterval(() => {
    a++;

    const div = document.querySelector('.change');
    div.classList.remove('change');

    if (a <= allDivs.length) {
      div.nextElementSibling.classList.add('change');
    } else {
      allDivs[0].classList.add('change');
      a = 1;
    }
  }, 20000);
};

runSlideShow();

// ------------- Cube -------------

let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

const cubeBox = document.querySelector('.cube__box');

// Top arrow - move +20 deg x-axis
document.querySelector('.control--top-x').addEventListener('click', () => {
  cubeBox.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

// Bottom arrow - move -20 deg x-axis
document.querySelector('.control--bottom-x').addEventListener('click', () => {
  cubeBox.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

// Left arrow - move +20 deg y-axis
document.querySelector('.control--left-y').addEventListener('click', () => {
  cubeBox.style.transform = `rotateY(${(y -= 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});

// Right arrow - move -20 deg y-axis
document.querySelector('.control--right-y').addEventListener('click', () => {
  cubeBox.style.transform = `rotateY(${(y += 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});

// Between top and right arrows - move +20 deg Z-axis
document.querySelector('.control--top-z').addEventListener('click', () => {
  cubeBox.style.transform = `rotateZ(${(z += 20)}deg) rotateX(${x}deg) rotateY(${y}deg)`;
});

// Between Bottom and left arrows - move -20 deg Z-axis
document.querySelector('.control--bottom-z').addEventListener('click', () => {
  cubeBox.style.transform = `rotateZ(${(z -= 20)}deg) rotateX(${x}deg) rotateY(${y}deg)`;
});

// Start/Pause auto rotating cube
const playPuase = () => {
  if (bool) {
    interval = setInterval(() => {
      cubeBox.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};

// By default cube rotates
playPuase();

// Rotating cube stops when user mouseover on the control
document.querySelector('.control').addEventListener('mouseover', () => {
  bool = false;
  playPuase();
});

// Cube rotates again when user mouseout from the control
document.querySelector('.control').addEventListener('mouseout', () => {
  bool = true;
  playPuase();
});
