const gallery = document.querySelector(".gallery-items");

let maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    gallery.scrollLeft = gallery.scrollLeft + step;
    if (gallery.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (gallery.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

gallery.addEventListener("mouseover", () => {
  stop();
});

gallery.addEventListener("mouseout", () => {
  start();
});

start();