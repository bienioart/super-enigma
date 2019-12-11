// Draw a name for your baby!

const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Myślę że", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

function start() {
    const indexPrefixs = Math.floor(Math.random() * prefixs.length);
    const indexNames = Math.floor(Math.random() * names.length);

    // console.log(indexPrefixs);
    // console.log(indexNames);

    div.textContent = prefixs[indexNames - 1] + " że " + names[indexPrefixs - 1];
}
btn.addEventListener('click', start);