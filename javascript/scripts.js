/* menu desplegable */ 

const toggle = document.getElementById("menuToggle");
const navMobile = document.getElementById("navMobile");

toggle.addEventListener("click", () => {
  navMobile.style.display = navMobile.style.display === "block" ? "none" : "block";
});

/* galeria imagenes */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider img').forEach((img) => {
    img.addEventListener('click', () => {
      img.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    });
  });
});

/*flechas interccion */ 

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const images = slider.querySelectorAll("img");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const counter = document.getElementById("counter");

  let currentIndex = 0;

  function updateCounter() {
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  function scrollToImage(index) {
    if (index >= 0 && index < images.length) {
      images[index].scrollIntoView({ behavior: "smooth", inline: "center" });
      currentIndex = index;
      updateCounter();
    }
  }

  prevBtn.addEventListener("click", () => {
    scrollToImage(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    scrollToImage(currentIndex + 1);
  });

  images.forEach((img, idx) => {
    img.addEventListener("click", () => {
      scrollToImage(idx);
    });
  });

  updateCounter();
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