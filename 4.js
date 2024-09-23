function showtheAlert() {
    var name = document.getElementById('Name').value;
    alert('Hi ' + name + '!');
}


var isGrey = true;
function colorChange() {
    if (isGrey) {
        document.body.style.backgroundColor = 'grey';
    } else {
        document.body.style.backgroundColor = 'orange';
    }
    isGrey = !isGrey;
}


function validateText() {
    var tester = document.getElementById('Tester').value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(tester)) {
        alert('NO NO NO THERE IS A SPECIAL CHARACTER USED HERE!');
    } 
}

function addingText() {
    var header = document.getElementById('header');
    heading.textContent += ' Add Text';
}
