const form = document.getElementById("bodyInicio")
var x = document.getElementById('error');
    x.style.visibility = 'hidden';
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const name = document.getElementById("inputName").value + ' ' + document.getElementById("inputSurname").value;
    console.log(email, password);
    if (email=="ortizmariana899@gmail.com" && password=="2805"){
        localStorage.setItem('user.email', email);
        localStorage.setItem('user.password', password);
        localStorage.setItem('user.name', name);
        window.location.replace("./subInicio.html");
    } else {
        visibility(x);
    }
})

function visibility(x) {
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    }
}
