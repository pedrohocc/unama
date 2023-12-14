function verificarLogin() {
    if(localStorage.getItem('logado') !== 'true' && localStorage.getItem('isAdmin') !== 'true') {
        window.location.href = 'index.html';
    } 
}