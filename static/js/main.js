const hero1 = document.querySelector('.hero-1');
const hero2 = document.querySelector('.hero-2');

document.addEventListener('DOMContentLoaded', () => {
  init();
});

const eventHandler = (type, selector, callback, options) => {
  document.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) callback(e)
    },
  options
  );
}

const init = () => {
  setSlideShow();
  eventHandler('click', '#hero-btn-left', () => { heroSlideShow(); });
  eventHandler('click', '#hero-btn-right', () => { heroSlideShow(); });
}

const setSlideShow = () => { setInterval(heroSlideShow, 10000); }

const heroSlideShow = () => {
  if (hero1.style.width === '100%') {
    hero1.style.width = '0px';
    hero2.style.width = '100%';
  } else {
    hero2.style.width = '0px';
    hero1.style.width = '100%';
  }
}
