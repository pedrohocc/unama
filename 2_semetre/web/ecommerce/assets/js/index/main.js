function logar() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (email !== '' && senha !== '') {
        let formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('senha', senha);

        fetch('/actions/loginSubmit.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        })
            .then(response => response.text())
            .then(text => {
                if(text == 'Usuário ou senha incorreto') {
                    alert(text);
                } else {
                    localStorage.setItem('logado', true);
                    localStorage.setItem('usuario', text);
                    window.location.href = '/dashboard/home.html';
                }
            })
            .catch(error => console.error('Erro:', error));
    }
}