const inputConfig = require("readline");

async function main() {
  const idadeUser = await perguntar("Qual sua idade?");
  const maiorDeIdade = isMaiorDeIdade(idadeUser)
  console.log(maiorDeIdade ? 'Maior de idade' : 'Menor de idade')
  
}

function perguntar(perguntaUser) {
  const pergunta = perguntaUser;

  return new Promise((value) => {
    const input = inputConfig.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    input.question(`${pergunta} `, (res) => {
      value(res);
      input.close();
    });
  });
}

function isMaiorDeIdade(idade) {
    idade = Number(idade)
    return idade >= 18 ? true : false
}

main();
