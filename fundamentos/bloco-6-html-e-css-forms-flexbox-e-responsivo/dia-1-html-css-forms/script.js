let submit = document.querySelector('#submit');
let clear = document.querySelector('#clear');
let fullName = document.querySelector('#nomeCompleto');
let email = document.querySelector('#email');
let textArea = document.querySelector('#answer');
let date = document.querySelector('#date');
let checked1 = document.querySelector('#agree');
let checked2 = document.querySelector('#agree2');

clear.addEventListener('click', function(){
    fullName.value = null;
    email.value = null;
    document.querySelector('input[name="option"]:checked').checked = false;
    textArea.value = null;
    date.value = ""
    checked1.checked = false;
    checked2.checked = false;
});

submit.addEventListener('click', function(event) {
    if (fullName.value.length < 10 || fullName.value.length > 40 || email.value.length < 10 || email.value.length > 50 || checked2.checked === false) {
        window.alert('Dados Inválidos');
        event.preventDefault();
    } else {
        window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
});