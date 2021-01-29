const calculatorResult = document.querySelector("h2");
const buttons = document.querySelectorAll("button");
const clearValue = document.querySelector(".ac");

let firstValue = 0;
let operatorValue = "";
let waitSyncNext = false;

const calculate = {
    '%':(firstValue, secondValue)=>firstValue  % secondValue,
    '/':(firstValue, secondValue)=>firstValue  / secondValue,
    '*':(firstValue, secondValue)=>firstValue  * secondValue,
    '-':(firstValue, secondValue)=>firstValue  - secondValue,
    '+':(firstValue, secondValue)=>firstValue  + secondValue,
    '=':(firstValue, secondValue)=>  secondValue
}


buttons.forEach(btn=>{
    if(btn.classList.length===0){
    btn.addEventListener("click", ()=>getValue(btn.value))
    } else if(btn.classList.contains("operator")) {
        btn.addEventListener("click", ()=>useOperator(btn.value))
    }  else if(btn.classList.contains("dot")) {
        btn.addEventListener("click", dotValue)
    }  else if(btn.classList.contains("zero")) {
        btn.addEventListener("click", ()=>getValue(btn.value))
    } 
})

function getValue(number){
    //replace current value if first value is entered
    if(waitSyncNext){
        calculatorResult.textContent=number;
        waitSyncNext=false;
    } else{
    const displayValue = calculatorResult.textContent;
    calculatorResult.textContent=displayValue==="0"?number:displayValue+number;
    }
}

console.log(clearValue)
clearValue.addEventListener("click",()=>{
    calculatorResult.textContent="0";
    firstValue = 0;
    operatorValue = '';
    waitSyncNext=false;
})

function dotValue(){
    //if operator entered do not add dot value
    if(waitSyncNext){return ;}
    if(!calculatorResult.textContent.includes(".")){
        calculatorResult.textContent = calculatorResult.textContent + ".";
    }
}

function useOperator(operator){
    const currentValue = Number(calculatorResult.textContent);
    //assigning value if not 

// if operator already entered skip the process
    if(operator && waitSyncNext){
        operatorValue = operator;
        return ;
    }

    if (!firstValue){
        firstValue = currentValue;
    } else {
        console.log(firstValue, operatorValue, currentValue)
        const calculation = calculate[operatorValue](firstValue,currentValue);
        console.log( 'calculation', calculation )
        calculatorResult.textContent=calculation;
        firstValue=calculation;
    }
    waitSyncNext = true;
    operatorValue = operator;
} 