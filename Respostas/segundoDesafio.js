function obterMaiorLetra(string) {
    string = string.replace(/[^a-zA-Z0-9]/g, '');  
    string = string.toLowerCase();
  
    let maiorLetra = string[0];
    for (let i = 1; i < string.length; i++) {
      if (string[i] > maiorLetra) {
        maiorLetra = string[i];
      }
    }
  
    return maiorLetra;
  }

  const frase = 'May the force be with you';
  const maiorLetra = obterMaiorLetra(frase);
  console.log('A maior letra é:', maiorLetra);
  