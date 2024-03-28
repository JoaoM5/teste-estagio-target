function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  function verificarFibonacci(numero) {
    let limite = numero + 2;
    let sequencia = [0, 1];
    for (let i = 2; i < limite; i++) {
      sequencia.push(fibonacci(i));
    }
  
    if (sequencia.includes(numero)) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
  }
  
  // Exemplo de uso
  const numeroInformado = 13;
  const resultado = verificarFibonacci(numeroInformado);
  console.log(resultado);  