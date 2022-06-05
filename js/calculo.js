let tip = 0
let total = 0

tipAmount = document.querySelector("#tip-amount");
tipAmount.innerHTML = '$' + tip.toFixed(2)

totalAmount = document.querySelector("#total");
totalAmount.innerHTML = '$' + total.toFixed(2)

errorElement = document.querySelector("#validation");
errorElement.innerHTML = " "

function calculaTip(){
    errorElement.innerHTML = " "

    inputBill = document.querySelector('input[name="bill"]');
    bill = inputBill.value

    inputPeople = document.querySelector('.input-people');
    people = inputPeople.value;

    if (people > 0){
        tip = bill * tipPercentual / ( 100 * people);

        tipAmount = document.querySelector("#tip-amount");
        tipAmount.innerHTML = '$' + tip.toFixed(2)

        return tip
    } else {
        errorElement.innerHTML = "Must be a valid number"
    }
}

function calculaTotal(){
    errorElement.innerHTML = " "

    inputBill = document.querySelector('input[name="bill"]');
    bill = inputBill.value

    inputPeople = document.querySelector('.input-people');
    people = inputPeople.value;

    if (people >0){
        total = ( bill / people ) + tip;

        totalAmount = document.querySelector("#total");
        totalAmount.innerHTML = '$' + total.toFixed(2)
    } else {
        errorElement.innerHTML = "Must be a valid number"
    }
    
}

reset = document.querySelector("#reset");
reset.addEventListener("click", () => calculaTip())
reset.addEventListener("click", () => calculaTotal())