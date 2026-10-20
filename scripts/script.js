// Menu hambúrguer
const burger = document.getElementById("burger"),
  nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});

// Carrossel "Recomendado"
const track = document.getElementById("track");
const step = () => track.querySelector(".rec").offsetWidth + 20;
document
  .getElementById("next")
  .addEventListener("click", () => track.scrollBy({ left: step() }));
document
  .getElementById("prev")
  .addEventListener("click", () => track.scrollBy({ left: -step() }));
