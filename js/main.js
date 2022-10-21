"use strict";

const btnCalculate = document.getElementById('btn-calculate');

btnCalculate.addEventListener('click', function(){
    const fullName = document.getElementById('full-name').value;
    const distance = Number(document.getElementById('km').value);
    const ageSelected = document.getElementById('age').selectedIndex;
    const age = ageSelected.options[ageSelected];

    if(!isNaN(distance) || km <= 0){
         console.log(distance, fullName, age);
     }else{
        alert("Nei chilometri DEVI inserire un numero superiore o uguale a 0, la pagina verrà ricaricata");
         window.location.reload;
     }
});