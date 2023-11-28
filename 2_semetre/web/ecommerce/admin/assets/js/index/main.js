function logar() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('senha').value;

    if (user !== '' && pass !== '') {
        let formData = new URLSearchParams();
        formData.append('user', user);
        formData.append('senha', pass);

        fetch('../../../../actions/loginAdminSubmit.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        })
            .then(response => response.text())
            .then(text => {
                if(text == 'Usuário logado com sucesso') {
                    localStorage.setItem('logado', true);
                    localStorage.setItem('isAdmin', true);
                    window.location.href = 'home.html';
                } else {
                    alert(text);
                }
            })
            .catch(error => console.error('Erro:', error));
    }
}