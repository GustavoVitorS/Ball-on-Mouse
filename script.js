const cont = document.querySelector('#container');
const mouse = cont.querySelector('#mouse');

window.addEventListener('mousemove', function (e) {
  mouse.style.top = e.y - "25" + "px";
  mouse.style.left = e.x - "25" + "px";
})