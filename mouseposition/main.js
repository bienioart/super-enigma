const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {
  h1.innerHTML = (e.screenX) + "," + (e.screenY);

  document.body.style.backgroundColor = `rgb(${e.screenX}, ${e.screenY} , 0)`;

  // wstrzykiwanie ważne nie używać " " tylko ````` !!!!!  ` $ {}. oraz wiadome funkcja strzałkowa i e jako event. event pobiera wlasciwosci z js.

})