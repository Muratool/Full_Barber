"use strict";

let burger = document.querySelector('.header__burger');
let burger_menu = document.querySelector('.header__menu');
let header_body = document.querySelector('.header__body');
let header__right = document.querySelector('.header__right');
let header__btn = document.querySelector('.header__btn');
let container = document.querySelector('.container');
let header = document.querySelector('.header');
let body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger_menu.classList.toggle('active');
  header_body.classList.toggle('active');
  header__right.classList.toggle('active');
  header__btn.classList.toggle('active');
  container.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('active');
})