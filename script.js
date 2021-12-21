const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const sum = document.querySelector('#sum');
const minus = document.querySelector('#minus');
const mult = document.querySelector('#mult');
const divided = document.querySelector('#divided');
const del = document.querySelector('#del');
const result = document.querySelector('#result');
const input = document.querySelector('#input');

function operation(e) {
    input = e.key;
}
one.addEventListener('keypress', operation);
one.addEventListener('click', function(){
  input = '1';
})


function clear(e) {
    e.target = '';
} 
result.addEventListener('click', clear)

