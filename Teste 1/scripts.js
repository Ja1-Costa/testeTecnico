function pertenceAFibonacci(numero) {
    let a = 0;
    let b = 1;
    let c = a + b;
  
    while (c <= numero) {
      if (c === numero) {
        return true;
      }
      a = b;
      b = c;
      c = a + b;
    }
  
    return false;
  }
  
  // Exemplo de uso:
  const numeroVerificar = 34;
  const pertence = pertenceAFibonacci(numeroVerificar);
  
  if (pertence) {
    console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`);
  }