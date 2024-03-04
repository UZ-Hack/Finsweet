'use strict'

const menuBurger = document.querySelector(".fa-bars");
const menuNav = document.querySelector(".nav");
const closeMenuBtn = document.querySelector(".fa-xmark");

menuBurger.addEventListener("click", () => {
  menuNav.classList.add("open");
});

closeMenuBtn.addEventListener("click", () => {
  menuNav.classList.remove("open");
});

const logoLink = document.querySelector(".logo");

logoLink.addEventListener("click", () => {
  window.location = ".././index.html";
});

const homePageLink = document.querySelector(".home-link");

homePageLink.addEventListener("click", () => {
  window.location = ".././index.html";
});

const startupLink = document.querySelector(".startup-link");

startupLink.addEventListener("click", () => {
  window.location = ".././startup.html";
});

const allPostsLink = document.querySelector(".all-posts-link");

allPostsLink.addEventListener("click", () => {
  window.location = ".././all-posts.html";
});

const blogLink = document.querySelector(".blog-link");

blogLink.addEventListener("click", () => {
  window.location = ".././blog-post.html";
});

const registerPageLink = document.querySelector(".register-link");

registerPageLink.addEventListener("click", () => {
  window.location = ".././register.html";
});

const btnLogin = document.querySelector(".btn--login");

btnLogin.addEventListener("click", () => {
  window.location = ".././login.html";
});
