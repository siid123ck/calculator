const calculatorResult = document.querySelector("h2");
const buttons = document.querySelectorAll("button");
const clearValue = document.querySelector(".ac");

let firstValue = 0;
let operatorValue = "";
let waitSync = false;




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
    const displayValue = calculatorResult.textContent;
    calculatorResult.textContent=displayValue==="0"?number:displayValue+number;
}

console.log(clearValue)
clearValue.addEventListener("click",()=>{
    calculatorResult.textContent="0";
    firstValue = 0;
    operatorValue = '';
    waitSync=false;
})

function dotValue(){
    if(!calculatorResult.textContent.includes(".")){
        calculatorResult.textContent = calculatorResult.textContent + ".";
    }
}

function useOperator(operator){
    const currentValue = Number(calculatorResult.textContent);
    //assigning value if not 
    if (!firstValue){
        firstValue = currentValue;
    } 
    operatorValue = operator;
    console.log(firstValue, operatorValue);
}