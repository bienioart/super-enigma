const btn = document.querySelector('button');
const list = document.querySelectorAll('li');
let size = 30;

btn.addEventListener('click', () => {
    size++;
    list.forEach((elo) => {
        elo.style.display = 'block';
        elo.style.fontSize = size + 'px';
    })
})