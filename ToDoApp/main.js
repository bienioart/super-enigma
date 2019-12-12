
const ul = document.querySelector('ul');
const place = document.getElementsByClassName('place');
const click = document.getElementsByClassName('click');

const removeList = (e) => {
    e.target.parentNode.remove();
}

click[0].addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerHTML = place[0].value + " <button>usuń</button>";
    // li.dataset.key = ul.length;
    ul.appendChild(li);
    place[0].value = "";
})

document.querySelectorAll('button').forEach(item => item.addEventListener('click', removeList)); 