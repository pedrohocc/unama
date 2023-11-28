const fs = require('fs');
const wppconnect = require('@wppconnect-team/wppconnect');

const menuTexto = `Menu 📜:\n1 - Cardapio\n2 - Localização\n3 - Fazer pedido\n4 - Horário de funcionamento\n5 - Promoções`
const textoInvalido = `Desculpe, não entendi o que você quis dizer. Digite alguma das opções abaixo:\n\n${menuTexto}`
const urlCardapio = `./cardapio-pizzaria-sitio-crcado-dom-rafa-pizzaria.pdf`
const linkSite = 'https://labocabelem.menudino.com/'
const horarioFuncionamento = `*DOM 	17:00 às 22:30*\n*SEG 08:30 às 13:30*\n*TER 14:30 às 22:30*\n*QUA 14:30 às 22:30*\n*QUI 14:30 às 22:30*\n*SEX 14:30 às 22:30*\n*SÁB 14:30 às 22:30*`
const promocaoDia = '*Pizza de Calabresa + Refrigerante 2L por apenas R$ 39,90*'

function connectWppConnect() {
  wppconnect
    .create({
      session: 'sessionName',
      catchQR: (base64Qr, asciiQR) => {
        console.log(asciiQR); // Optional to log the QR in the terminal
        var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
          response = {};

        if (matches.length !== 3) {
          return new Error('Invalid input string');
        }
        response.type = matches[1];
        response.data = new Buffer.from(matches[2], 'base64');

        var imageBuffer = response;
        require('fs').writeFile(
          'out.png',
          imageBuffer['data'],
          'binary',
          function (err) {
            if (err != null) {
              console.log(err);
            }
          }
        );
      },
      logQR: false,
    })
    .then((client) => start(client))
    .catch((error) => console.log(error));
}

connectWppConnect();

function start(client) {
  const users = []

  client.onMessage(async (message) => {
    if (message.from === "559191136092@c.us") {
      if (users.includes(message.from)) {
        if (!verificaMensagem(message.body)) {
          client.startTyping(message.from, 2000).then(() => {
            client.sendText(message.from, textoInvalido)
          })
        } else {
          acoesMenu(client, message)
        }
      } else {
        users.push(message.from)
        client.startTyping(message.from, 2000).then(async () => {
          await client.sendText(message.from, `Olá ${message.notifyName}! 🍕 Bem-vindo à Pizzaria Fic! Estou aqui para te ajudar a fazer seu pedido de forma rápida e fácil.`)
          client.sendText(message.from, menuTexto)
        })
      }
    }
  });
}

function verificaMensagem(mensagem) {
  if (mensagem === '1' || mensagem === '2' || mensagem === '3' || mensagem === '4' || mensagem === '5' || mensagem == '6') {
    return true
  } else {
    return false
  }
}

function acoesMenu(client, message) {
  switch (message.body) {
    case '1':
      client.startTyping(message.from, 2000).then(async () => {
        await client.sendText(message.from, 'Aguarde enquanto eu mando o cardápio.')
        client.sendFile(message.from, urlCardapio)
      })
      break;
    case '2':
      client.startTyping(message.from, 2000).then(async () => {
        await client.sendText(message.from, 'Aguarde enquanto eu mando a localização.')
        client.sendLocation(message.from, '-1.454636249794375', '-48.474175103188635', 'Travessa Três de Maio, 1680, Belém, PA ')
      })
      break;
    case '3':
      client.startTyping(message.from, 2000).then(async () => {
        await client.sendText(message.from, 'Otimo, aguarde enquanto eu mando o link.')
        client.sendLinkPreview(message.from, linkSite)
      })
      break;
    case '4':
      client.startTyping(message.from, 2000).then(async () => {
        await client.sendText(message.from, 'Nós funcionamos nos seguintes horários:')
        client.sendText(message.from, horarioFuncionamento)
      })
      break;
    case '5':
      client.startTyping(message.from, 2000).then(async () => {
        await client.sendText(message.from, '*Promoção do DIA*')
        client.sendText(message.from, promocaoDia)
      })
      break;
    case '6':
      client.startTyping(message.from, 2000).then(async () => {
        await client.sendText(message.from, 'Aqui esta o link do jogo de basquete')
        client.sendLinkPreview(message.from, 'https://basquetebol.anota.ai')
      })
      break
  }
}