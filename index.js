'use strict';

const documentReady = () => {


  const menuIconContainer = document.getElementById('menuIconContainer');
  const menuCloseIconContainer = document.getElementById('menuCloseIconContainer');

  const headerNavMenuList = document.querySelector('.header-nav__menu-list');


  const openMenu = () => {
    headerNavMenuList.classList.add('header-nav__menu-list--open');
  };

  const closeMenu = () => {
    headerNavMenuList.classList.remove('header-nav__menu-list--open');
  };

  menuIconContainer.addEventListener('click', openMenu);
  menuCloseIconContainer.addEventListener('click', closeMenu);

};

document.addEventListener('DOMContentLoaded', documentReady);