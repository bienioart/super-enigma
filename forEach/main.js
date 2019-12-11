// pętla

// const btn = document.querySelector('button');
// const list = document.querySelectorAll('li');
// const ul = document.querySelector('ul');
// let size = 10;


// btn.addEventListener('click', () => {
//     size++;
//     for (let i = 0; i < list.length; i++)
//         list[i].style.display = 'block';
//     ul.style.fontSize = size + 'px';
// })

// forEach

const btn = document.querySelector('button');
const list = document.querySelectorAll('li');
let size = 10;


btn.addEventListener('click', () => {
    size++;
    list.forEach((loop) => {
        loop.style.display = 'block';
        loop.style.fontSize = size + 'px';
    })
})