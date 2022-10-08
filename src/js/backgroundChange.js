import '../css/backgroundChange.css';

document.querySelector('#app').innerHTML = `
    <div id="container">
        <span> Background Color: </span> <span id="dynamicColor">  </span>
    </div>
    <button id="btnChangeBg"> click me  </button>
`
const btnColorFlipper = document.getElementById('colorFlipper');
const btnSimpleHex = document.getElementById('simpleHex');
const btnClickMe = document.getElementById('btnChangeBg');

btnClickMe.addEventListener('click', function(){
    let dynamicColor = document.getElementById('dynamicColor');
    dynamicColor.innerHTML = '';
    function randomcolor(){
        return Math.floor(Math.random() * 255);
    }
    document.body.style.backgroundColor = 'rgba(' + randomcolor() + ',' + randomcolor() + ',' + randomcolor() + '\)';
    dynamicColor.innerHTML += '<span id="dynamicColor">'+ document.body.style.backgroundColor +'</span>';
});