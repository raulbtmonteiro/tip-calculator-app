const buttons = document.querySelectorAll(".tip-item");
console.log(buttons);

const custom = document.querySelector(".tip-custom");
console.log(custom);

let selectedButtom 
let tipPercentual = 0

custom.addEventListener("click", function(){
    const other = document.querySelector(".buttom-selected");
    const verification = document.querySelectorAll(".buttom-selected");
    if ( !verification.length ==0 ){
        console.log("existe botão selecionado");
        other.classList.remove("buttom-selected");
    }
    console.log("fui clicado");
    custom.classList.toggle("buttom-selected");
})

custom.addEventListener("focusout", function(){
    selectedButtom = document.querySelector(".buttom-selected");
    buttomContent = selectedButtom.value
    tipPercentual = parseFloat(buttomContent)
    return tipPercentual
})

function addEvent(){
    const other = document.querySelector(".buttom-selected");
    const verification = document.querySelectorAll(".buttom-selected");
    if ( !verification.length ==0 ){
        console.log("existe botão selecionado");
        other.classList.remove("buttom-selected");
    }
    console.log("fui clicado");
    this.classList.toggle("buttom-selected");
    selectedButtom = document.querySelector(".buttom-selected");
    buttomContent = selectedButtom.textContent
    tipPercentual = parseFloat(buttomContent)
    console.log(tipPercentual)
    return tipPercentual
}

for ( i = 0 ; i < buttons.length; i++) {
    item = buttons[i];
    console.log(item);
    item.addEventListener('click', addEvent);
}


