import '../css/counter.css';

document.querySelector('#app').innerHTML = `
    <h1 id="title"> Counter </h1>
    <div id="dynamicNumber">0</div>
    <div id="buttons">
        <button id="decrease"> DECREASE <i class="fa-solid fa-minus"></i> </button>    
        <button id="reset"> RESET <i class="fa-solid fa-rotate-left"></i></button>
        <button id="increase"> INCREASE <i class="fa-solid fa-plus"></i></button>
    </div>
`;

const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');

btnIncrease.addEventListener('click', function(){
    let number = document.getElementById('dynamicNumber').textContent;
    let newNumber = parseInt(number) + 1;
    document.getElementById('dynamicNumber').textContent = newNumber;
    if(document.getElementById('dynamicNumber').textContent > 0){
        btnDecrease.removeAttribute('disabled', true);
    }
});

btnDecrease.addEventListener('click', function(){
    let number = document.getElementById('dynamicNumber').textContent;
    let newNumber = parseInt(number) - 1;
    document.getElementById('dynamicNumber').textContent = newNumber;
    if(document.getElementById('dynamicNumber').textContent == 0){
        btnDecrease.setAttribute('disabled', true);
    }
});

btnReset.addEventListener('click', function(){
    const numberZero = document.getElementById('dynamicNumber');
    numberZero.textContent = 0;
    if(document.getElementById('dynamicNumber').textContent == 0){
        btnDecrease.setAttribute('disabled', true);
    }
});