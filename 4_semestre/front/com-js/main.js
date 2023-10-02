const divConteudo = document.querySelector('.conteudo')
const ulPagination = document.querySelector('.pagination')
const pIndicaPagina = document.querySelector('#identificaPagina')
let pagina = 1

function getNoticias() {
    fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?page=${pagina}&qtd=10&tipo=noticia`).then(response => {
        if(!response.ok) {
            alert('Erro de comunicação')
        } else {
            return response.json()
        }
    }).then(data => {
        listarNoticias(data)
        paginacao(data.totalPages , data.page, data.nextPage, data.previousPage)
    })
}

function listarNoticias(noticias) {
    divConteudo.innerHTML = ''

    for (const noticia of noticias.items) {
        const newCard = document.createElement('div')
        const imagemNoticia = document.createElement('img')
        const tituloNoticia = document.createElement('h2')
        const introducao = document.createElement('p')
        const button = document.createElement('button')

        
        jsonImagem = JSON.parse(noticia.imagens)
        imagemNoticia.src = 'https://agenciadenoticias.ibge.gov.br/' + jsonImagem.image_intro
        tituloNoticia.textContent = noticia.titulo
        introducao.textContent = noticia.introducao
        button.textContent = 'Ler mais'
        button.onclick = () => {
            window.open(`${noticia.link}`)
        }
        newCard.className = 'card_noticia'
        listaItens = [imagemNoticia, tituloNoticia, introducao, button]
        listaItens.forEach(element => {
            newCard.appendChild(element)
        });

        divConteudo.appendChild(newCard)
    }
}

function paginacao(totalPaginas, paginaAtual, proximaPagina, paginaAnterior) {
    ulPagination.innerHTML = ''

    pIndicaPagina.textContent = 'Pagina atual: ' + pagina

    const liAnterior = document.createElement('li')
    const liAtual = document.createElement('li')
    const liProximoLink = document.createElement('li')
    const liTotalPaginas = document.createElement('li')
    const linkAnterior = document.createElement('a')
    const linkAtual = document.createElement('a')
    const linkProximo = document.createElement('a')
    const linkTotal = document.createElement('a')

    
    listaLi = [liAnterior, liAtual, liProximoLink, liTotalPaginas]
    
    listaLi.forEach(element => {
        element.className = 'page-item'
    });
    
    listaLink = [linkAnterior, linkAtual, linkProximo, linkTotal]

    if(paginaAnterior == 0) {
        listaLi.splice(0,1)
        listaLink.splice(0,1)
    }

    if(proximaPagina == 0){
        listaLi.splice(1,2)
        listaLink.splice(1,2)
    }

    if(paginaAtual == 169) {
        listaLi.splice(2,1)
        listaLink.splice(2,1)
    }

    linkAnterior.classList.add('anterior')
    linkAtual.classList.add('atual')
    linkProximo.classList.add('proximo')

    listaLink.forEach(element => {
        element.classList.add('page-link')
        element.href = '#'
        element.onclick = () => {
            const valorClasse = element.classList[0]
            switch (valorClasse) {
                case 'anterior':
                    pagina = paginaAnterior
                    break
                case 'proximo':
                    pagina = proximaPagina
                    break
                case 'atual':
                    pagina = paginaAtual
                    break
                default:
                    pagina = totalPaginas
                    break;
            }
            getNoticias()
        }
    });

    linkAnterior.innerHTML = paginaAnterior
    linkAtual.innerHTML = paginaAtual
    linkProximo.innerHTML = proximaPagina
    linkTotal.innerHTML = totalPaginas

    for (let index = 0; index < listaLi.length; index++) {
        const item = listaLi[index]
        item.appendChild(listaLink[index])
    }    

    listaLi.forEach(element => {
        ulPagination.appendChild(element)
    });
}