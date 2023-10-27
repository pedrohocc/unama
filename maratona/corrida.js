const lines = ["3 11", ""];
const lista = lines[0].split(" ");
const voltas = lista[0];
const placas = lista[1];
const total = Number(voltas) * Number(placas);

let valores = [];

for (let i = 10; i < 100; i += 10) {
  const valor = (i / 100) * total;
  valores.push(Math.trunc(valor + 1));
}

console.log(valores.join(" "));
