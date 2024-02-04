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

// Функція для закриття алерту
function closeCustomAlert() {
  var customAlert = document.getElementById("customAlert");
  customAlert.style.display = "none";
}