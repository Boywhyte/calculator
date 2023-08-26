let equal = document.querySelector('.equal')
let clear = document.querySelector('#clear')
let decimal = document.querySelector('.decimal')

let previousValue = ''
let currentValue = ''
let operator = ''

let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator') 
let previousScreen = document.querySelector('.previous')
let currentScreen = document.querySelector('.current')

numbers.forEach((word) => word.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue
}))

operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperators(e.target.textContent)
    previousScreen.textContent = previousValue+''+operator;

}))

clear.addEventListener('click', function(){
    previousValue=''
    currentValue=''
    previousScreen.textContent=currentValue
    operator=''
    currentScreen.textContent=currentValue
})


function handleNumber(num){
    if(currentValue.length<=5){
        currentValue += num
    }
}

function handleOperators(op){
    previousValue = currentValue
    operator = op
    currentValue =''
}


