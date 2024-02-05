document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slaid");
  const totalSlides = slides.length;
  const visibleSlides = 4;

  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index >= currentSlide && index < currentSlide + visibleSlides) {
        slide.classList.remove("hidden");
      } else {
        slide.classList.add("hidden");
      }
    });

    const prevButton = document.getElementById("button1");
    prevButton.disabled = currentSlide === 0;

    const nextButton = document.getElementById("button2");
    nextButton.disabled = currentSlide >= totalSlides - visibleSlides;
  }

  function navigateSlides(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
      currentSlide = 0;
    } else if (currentSlide > totalSlides - visibleSlides) {
      currentSlide = totalSlides - visibleSlides;
    }

    updateSlider();
  }

  let prevButton = document.getElementById("button1");
  let nextButton = document.getElementById("button2");

  prevButton.addEventListener("click", function () {
    navigateSlides(-1);
  });

  nextButton.addEventListener("click", function () {
    navigateSlides(1);
  });

  updateSlider();
});


// alert 
function showCustomAlert() {
  var customAlert = document.getElementById("customAlert");
  customAlert.style.display = "block";
}

function closeCustomAlert() {
  var customAlert = document.getElementById("customAlert");
  customAlert.style.display = "none";
}


// Функціонал для активної кнопки

function checkInputs() {
  var input1Value = document.getElementById('input1').value.trim();

  var supportBtn = document.getElementById('supportBtn');

  if (input1Value !== '') {
      supportBtn.removeAttribute('disabled');
  } else {
      supportBtn.setAttribute('disabled', 'true');
  }
}


// Функція для зміни стану бургер-меню
let menuOpen = false;

// Функція для зміни стану бургер-меню
function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const headerNav = document.querySelector('.header-nav');
    menuOpen = !menuOpen;

    if (menuOpen) {
        burgerMenu.classList.add('open');
        headerNav.style.display = 'block';
    } else {
        burgerMenu.classList.remove('open');
        headerNav.style.display = 'none';
    }
}