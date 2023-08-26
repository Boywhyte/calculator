let equal = document.querySelector('.equal');
let clear = document.querySelector('#clear');
let decimal = document.querySelector('.decimal');

let previousValue = '';
let currentValue = '';
let operator = '';

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator') ;
let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');

numbers.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
}))

operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperators(e.target.textContent)
    previousScreen.textContent = previousValue+''+operator;
    currentScreen.textContent=currentValue;
}))

clear.addEventListener('click', function(){
    previousValue='';
    currentValue='';
    previousScreen.textContent=currentValue;
    operator='';
    currentScreen.textContent=currentValue;
})

equal.addEventListener('click', function(){
    if(currentValue!='' && previousValue!=""){
        calculate()
        previousScreen.textContent = '';
        if(previousValue.length <= 5){
            currentScreen.textContent = previousValue;
        } 
        else{
            currentScreen.textContent = previousValue.slice(0,5)+'...';
        }
    }

})

decimal.addEventListener('click',function(){
    addDecimal();
})


function handleNumber(num){
    if(currentValue.length<=5){
        currentValue += num;
    }
}

function handleOperators(op){
    previousValue = currentValue;
    operator = op;
    currentValue ='';
}

function calculate (){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+'){
        previousValue+=currentValue;
    }
    else if (operator === "-"){
        previousValue -= currentValue;
    }
    else if (operator === "*"){
        previousValue *= currentValue;
    }
    else{
        previousValue /= currentValue;
    } 

    previousValue = randomNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function randomNumber(num){
    return Math.round(num * 1000)/1000;
}

function addDecimal(){
    if (!currentValue.includes(',')){
        currentValue += '.';
    }
}