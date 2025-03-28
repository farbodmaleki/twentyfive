document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".overlay").addEventListener("click", toggleMenu);
    document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

    
    function toggleMenu() {
        let menu = document.querySelector(".sidebar");
        menu.classList.toggle("active");

        let layer = document.querySelector(".overlay");
        layer.classList.toggle("active");
    }
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
