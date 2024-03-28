function inverterString(str) {
    let novaString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  // Exemplo de uso
  const strOriginal = "Olá, mundo!";
  const strInvertida = inverterString(strOriginal);
  
  console.log(`String original: ${strOriginal}`);
  console.log(`String invertida: ${strInvertida}`);
  
  // Entrada de dados via prompt
  //const strOriginal = prompt("Digite uma string: ");
  //const strInvertida = inverterString(strOriginal);
  //console.log(`String invertida: ${strInvertida}`);  