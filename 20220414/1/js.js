'use strict'

function changeTextInDivs(){

    let newTextArray = Array('Ett', 'Två', 'Tre', 'Fyra', 'Fem');
    let divArr = document.querySelectorAll('.container-fluid > div');
    for(let i=0; i<divArr.length; i++){
        divArr[i].textContent=newTextArray[i];
    }
}

changeTextInDivs();