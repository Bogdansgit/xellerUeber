'use strict';

function burgerMenu() {
  const menu = document.querySelector('.nav__menu');
  const button = document.querySelector('.nav__menu-opener');
  const links = document.querySelector('.nav__list > li > a');

  button.onclick = (e) => {
    e.preventDefault();
    toggleMenu();
  };

  links.onclick = (e) => toggleMenu();

  function toggleMenu() {
    menu.classList.toggle('nav__menu--active');
  }
}

burgerMenu();
