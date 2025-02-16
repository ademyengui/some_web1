let textColor = document.getElementById('text-color');
let textSize = document.getElementById('text-size');
let textFont = document.getElementById('text-font');

let text = document.getElementById('text');

function aply(){
    text.style.color = textColor.value;
    text.style.fontSize = textSize.value + 'px';
    text.style.fontFamily = textFont.value;
}