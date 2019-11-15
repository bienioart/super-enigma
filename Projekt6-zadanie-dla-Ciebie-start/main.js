
let array = ["Walcz", "Przemyśl to!", ]

const addBtn = document.querySelector('.add');
const h1 = document.querySelector('h1');
const input = document.querySelector('input[type=text]');
const reset = document.querySelector('.clean')
const show = document.querySelector('.showOptions')
const advice = document.querySelector('.showAdvice')




const addElement = () => {
    
    array.push(input.value);
    console.log(array);
    input.value = "";
}

const cleanArray = () => {
    
    array = []
    
}

const showArray = () => {

    window.alert(`${array}`);

}

const showAdvice = () => {

    let number = Math.floor(Math.random() * array.length);

    h1.innerText = array[number]

}



addBtn.addEventListener('click', addElement);

reset.addEventListener('click', cleanArray);

show.addEventListener('click', showArray);


advice.addEventListener('click', showAdvice);