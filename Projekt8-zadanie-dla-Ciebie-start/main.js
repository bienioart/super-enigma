// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const tekst1 = "Dzień dobry !!!";
const tekst2 = "Fajnie, że jesteś :)";
const tekst3 = "Zaczynamy";
const txt = [tekst1, tekst2, tekst3]
let indexTable = 0;
let indexTekst = 0;

// Implementacja
const addLetter = () => {

const interval = setInterval(function(){
    spnText.innerHTML += txt[indexTable][indexTekst];
    indexTekst++;
if (indexTekst === txt[indexTable].length) clearInterval(interval);}, 100);;
 // Użyj w środku setTimeout
}

if (clearInterval){
        console.log('dziala')
    };


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);