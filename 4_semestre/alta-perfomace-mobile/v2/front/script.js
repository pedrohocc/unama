function calcular() {
    const inputs = document.querySelectorAll('.notas')
    const numero1 = inputs[0].value
    const numero2 = inputs[1].value
    let resultado = 0
    fetch(`http://localhost:4000/media/${numero1}/${numero2}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
        resultado = Number(data)
        mostrarResultado(resultado)
    }
    )
  }
  
  function mostrarResultado(valor) {
    const paragrafoResultado = document.querySelector('#paragrafoResultado')
    let situacao = ''
    if(valor >= 7) {
        situacao = "Aprovado"
    } else {
        situacao = "Estude mais"
    }
    paragrafoResultado.innerText = `A média foi ${valor.toFixed(2)} e sua situação é ${situacao}`
    desabilitarEspera()
  }
  
  function desabilitarEspera() {
    const divCarregamento = document.querySelector('.carregamento')
    divCarregamento.style.display = 'none'
  }
  
