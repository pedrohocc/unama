const n = 9;

if (verificarPrimo(n)) {
  console.log(1);
  return;
} else {
  if (n % 2 == 0) {
    console.log(2);
    return;
  }
  console.log(0);
}

function verificarPrimo(n) {
  const divisores = [];
  for (let i = 1; i < n + 1; i++) {
    if (divisores.length < 3) {
      if (n % i == 0) {
        divisores.push(i);
      }
    } else {
      break;
    }
  }

  if (divisores.length > 2) {
    return false;
  }
  return true;
}
