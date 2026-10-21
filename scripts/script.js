// Menu: o botão de 3 barras mostra/esconde os tópicos
const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu');

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', aberto);
});

// Carrossel "Recomendado"
const trilho = document.getElementById('trilho');
const passo = () => trilho.querySelector('.recomendado-item').offsetWidth + 20;

document.getElementById('proximo').addEventListener('click', () => trilho.scrollBy({ left: passo() }));
document.getElementById('anterior').addEventListener('click', () => trilho.scrollBy({ left: -passo() }));