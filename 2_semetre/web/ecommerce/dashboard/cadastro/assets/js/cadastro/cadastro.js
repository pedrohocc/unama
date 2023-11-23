function voltar() {
    location.href = "../../index.html";
}

function cadastrar() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email !== '' && senha !== '' && nome !== '' && endereco !== '' && telefone !== '') {
        let formData = new URLSearchParams();
        formData.append('nome', nome);
        formData.append('endereco', endereco);
        formData.append('telefone', telefone);
        formData.append('email', email);
        formData.append('senha', senha);

        fetch('../../../../actions/addUser.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        })
            .then(response => response.text())
            .then(text => {
                if(text == 'Usuário cadastrado com sucesso!') {
                    alert("Cadastrado!");
                    location.href = "../../index.html";
                } else {
                    alert(text);
                }
            })
            .catch(error => console.error('Erro:', error));
    }
}