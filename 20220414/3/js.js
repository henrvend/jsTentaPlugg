'use strict';

window.addEventListener('load', function() {
    let submit = document.querySelector('button');
    submit.addEventListener('click', validateForm);
});


function validateForm(e) {

    let email = document.getElementById('email');
    let radio = document.querySelectorAll('input[name="arende"]:checked');
    let checked = null;

    for(let i =0; i<radio.length;i++){
        if(radio[i].checked){
            checked = radio[i];
        }
    }
    
    e.preventDefault();
    console.log(email.value.length)
    console.log(checked.value);
    try {
        if(email.value.length<7){
            throw(email);
        }
        if(checked.value!='fish'){
            throw(checked.value);
        }
        alert('Form sent');
    } catch (error) {
        console.log(error);
       error.style.borderBottom = 'solid red';
        document.querySelector('#error').textContent = error +' is not correct filled';
    }
}
    



