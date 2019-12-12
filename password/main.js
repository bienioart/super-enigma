const pole = document.getElementById('pass');
const tekst = document.querySelector('div');
const haslo = "1234";
const wiadomosc = "uzyskano dostęp";

pole.addEventListener('input', (e) => {

    if (haslo === e.target.value) {

        tekst.textContent = wiadomosc;
        e.target.value = '';
    } else {

        tekst.textContent = "Wpisz poprawne haslo aby uzyskac dostep";
    }
})

pole.addEventListener('focus', () => {
    pole.classList.add('active');
})