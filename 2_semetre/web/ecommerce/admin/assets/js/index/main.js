function logar() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('senha').value;

    if(user !== '' && pass !== '') {
       alert(user)
       alert(pass)
    } else {
        alert('Inválido')
    }
}