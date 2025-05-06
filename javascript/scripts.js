/* menu desplegable */ 

const toggle = document.getElementById("menuToggle");
const navMobile = document.getElementById("navMobile");

toggle.addEventListener("click", () => {
  navMobile.style.display = navMobile.style.display === "block" ? "none" : "block";
});



/* formulario */ 

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita recargar la página

    const formData = new FormData(form);

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSd7FslpvxYgmUxOf-o6GHqGAWlrXQzvGsIHLVvNuG04jcmsUA/formResponse', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
    .then(() => {
      form.reset(); // Limpiamos el formulario
      successMsg.style.display = 'block'; // Mostramos el mensaje
    })
    .catch((err) => {
      console.error('Error al enviar el formulario', err);
    });
  });
});

 // efecto como funciona 
const cards = document.querySelectorAll('.step-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3 // Cuando el 30% del elemento es visible
});

cards.forEach(card => {
  observer.observe(card);
});

/* galeria asi se veria tu tienda */

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-image').length;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});
