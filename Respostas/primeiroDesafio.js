function calcularMedia() {
    let nomeAluno = prompt("Digite o nome do aluno:");
    let notas = [];
    
    for (let i = 1; i <= 4; i++) {
      let nota = parseFloat(prompt(`Digite a nota da prova ${i}:`));

     if (isNaN(nota) || nota < 0 || nota % 1 !== 0) 
       return nota = parseInt(prompt("Digite um número inteiro positivo para a prova " + i + ":"));
        notas.push(nota);
   }
    
    let somaDasNotas = 0;

    notas.forEach(function(nota) {
      somaDasNotas += nota;
    });
    
    let media = somaDasNotas / notas.length;
    
    return `A média do aluno ${nomeAluno} é ${media.toFixed(2)}`;
  }

  console.log(calcularMedia());
  

  

