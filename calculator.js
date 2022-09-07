const squareInput = document.getElementById("square");
const countInput = document.getElementById("count");
const termInput = document.getElementById("term");
const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!/[^\d]/g.test(squareInput.value) && squareInput.value !== "") {
        alert("Только цифры")
    }

    if (!/[^\d]/g.test(countInput.value) && countInput.value !== "") {
        alert("Только цифры");
    }

    if (!/[^\d]/g.test(termInput.value) && termInput.value !== "") {
        alert("Только цифры");
    }
})