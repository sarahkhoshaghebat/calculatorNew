let display = document.querySelector('#display');
let btnClear = document.querySelector('#btn-clear');
let btnClearLastAction = document.querySelector('#btn-clear-last-action');
let btnBackSpace = document.querySelector('#btn-back-space');
let btnDiv = document.querySelector('#btn-Div');
let btnMul = document.querySelector('#btn-Mul');
let btnMinus = document.querySelector('#btn-Minus');
let btnPlus = document.querySelector('#btn-Plus');
let btnPn = document.querySelector('#btn-Pn');
let Point = document.querySelector('#Point');
let btnEquls = document.querySelector('#btn-Equls');


let btnNumbers = document.querySelectorAll('.btn-number');



btnClear.addEventListener('click',(event) =>{
    display.textContent = "0.0";
});

btnNumbers.forEach((item) => {
    item.addEventListener('click',(event) => {
        if(display.textContent == "0.0"){
        display.textContent = "event.target.textContent";
    } else {
        display.textContent += "event.target.textContent";

    }
    })
});