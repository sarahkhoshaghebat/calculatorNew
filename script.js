let display = document.querySelector('#display');
let btnClear = document.querySelector('#btn-clear');
let btnClearLastAction = document.querySelector('#btn-clear-last-action');
let btnBackSpace = document.querySelector('#btn-back-space');
let btnDiv = document.querySelector('#btn-Div');
let btnMul = document.querySelector('#btn-Mul');
let btnMinus = document.querySelector('#btn-Minus');
let btnPlus = document.querySelector('#btn-Plus');
let btnPn = document.querySelector('#btn-Pn');
let btnPoint = document.querySelector('#btnPoint');
let btnEquls = document.querySelector('#btn-Equls');



let setPoint = false;
let number1, number2, result;
let op = "";
let setResult = false;
let btnNumbers = document.querySelectorAll('.btn-number');



btnClear.addEventListener('click',(e) => {
    display.textContent = "0.0";
    setPoint = false;
    setResult = false;
    number1 = 0;
    number2 = 0;
});



btnPoint.addEventListener('click',(e) =>{
    if(setPoint == false){
        display.textContent+= ".";
        setPoint = true;
    }
});



btnPn.addEventListener('click',(e) => {
    display.textContent = display.textContent * -1;
});



btnBackSpace.addEventListener('click',(e) => {
    let len = display.textContent.length;
    let lastDigit = display.textContent.subster(len-1 ,len);
    if( lastDigit =="."){
        setPoint = false;
    }
    if (len >1 ) {
    display.textContent = display.textContent.subster(0,len-1);
    } else {
        display.textContent = "0.0";
    }
})



btnNumbers.forEach((item) => {
    item.addEventListener('click',(e) => {
        if(display.textContent == "0.0"){
        display.textContent = "e.target.textContent";
    } else {
        display.textContent += "e.target.textContent";
    }
    })
});



btnPlus.addEventListener('click',(e) =>{
    number1 = number(display.textContent);
    display.textContent = "0.0";
    op ="+";
});



btnClearLastAction.addEventListener('click',(e) =>{
    display.textContent = 0.0;
})



btnEquls.addEventListener('click',(e) => {
    if(setResult == false) {
    number2 = number(display.textContent);
    } else{
        number1 = number(display.textContent);
    }
    switch(op){
        case "+":
        result = number1 +number2;
        break;
        case "-":
        result = number1 -number2;
        break;
        case "*":
        result = number1 *number2;
        break;
        case "/":
        result = number1 /number2;
        break;
    }
    display.textContent = result;
    setResult = true;
});



btnMinus.addEventListener('click',(e) =>{
    number1 = number(display.textContent);
    display.textContent = "0.0";
    op ="-";
});



btnDiv.addEventListener('click',(e) =>{
    number1 = number(display.textContent);
    display.textContent = "0.0";
    op ="/";
});



btnMul.addEventListener('click',(e) =>{
    number1 = number(display.textContent);
    display.textContent = "0.0";
    op ="*";
});