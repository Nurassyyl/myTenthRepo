const textInput = document.getElementById("text");
const numberInput = document.getElementById("number");
const messageInput = document.getElementById("message");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!/[^а-яА-Я]/g.test(textInput.value)) {
        alert("В инпуте только кирилица");
    }
    if (!/[^а-яА-Я]\-\s/g.test(messageInput.value)) {
        alert("В инпуте только кирилица")
    }
    if (/[\-\_\.\!\~\*\'\w]+@([\w]+\.)+[\w]/gi.test(emailInput.value)) {
        alert("В инпуте только латиницы");
    }
    if (!/[^\d\-\()]/g.test(phoneInput.value)) {
        alert("В инпуте только цифры");
    }
})










