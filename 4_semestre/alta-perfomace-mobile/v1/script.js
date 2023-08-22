function calcular() {
    const inputs = document.querySelectorAll('.notas')
    let resultado = 0
    for (let input of inputs) {
      const nota = Number(input.value)
      resultado += nota
    }
    resultado = resultado / 4
    mostrarResultado(resultado)
  }
  
  function mostrarResultado(valor) {
    const paragrafoResultado = document.querySelector('#paragrafoResultado')
    let situacao = ''
    valor >= 7 ? situacao = "APROVADO" : situacao = "Estude mais"
    paragrafoResultado.innerText = `A média foi ${valor} e sua situação é ${situacao}`
    desabilitarEspera()
  }
  
  function desabilitarEspera() {
    const divCarregamento = document.querySelector('.carregamento')
    divCarregamento.style.display = 'none'
  }
  