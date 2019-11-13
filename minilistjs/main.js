
const btn = document.querySelector('button');
const list = document.querySelectorAll('li');
let fontSize = 10;

btn.addEventListener('click',() => {

    console.log('dziala');

    fontSize++;
    
    for (let i = 0; i < list.length; i++) {
    list[i].style.display = 'block';
    list[i].style.fontSize = fontSize + 'px';
    


}



})