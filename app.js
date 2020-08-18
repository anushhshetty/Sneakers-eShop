const navSlideOn = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main_menu');

  burger.addEventListener('click', () => {

    event.preventDefault();

    nav.classList.toggle('nav_active');
  });
}

const app = () => {
  navSlideOn();
}

app();