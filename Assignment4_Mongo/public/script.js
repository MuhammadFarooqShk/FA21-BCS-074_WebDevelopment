$(document).ready(validationBinding);

function validationBinding(){
    $('#submit_btn').click(function(e){
        var name = document.getElementById('name').value.trim();
        var message = document.getElementById('message').value.trim();
        var email = document.getElementById('email').value.trim();
        var error = false;

        if (name === '') {
            alert("Please Enter Name!");
            error = true;
        } else if (email === '') {
            alert("Please Enter Email!");
             error = true;
        } else if (email.indexOf('@') === -1 || email.indexOf(".com") === -1) {
             alert("Please Enter a Valid Email Address!");
             error = true;
        } else if (message === '') {
            alert("Please Enter Message!");
            error = true;
        }

        if (!error) {
            document.getElementById('name').value = '';
            document.getElementById('message').value = '';
            document.getElementById('email').value = '';
            alert("Form Submitted Successfully");
            e.preventDefault();
        } else {
            e.preventDefault();
        }   
    });
}