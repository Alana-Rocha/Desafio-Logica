function formatarNome(nomeCompleto) {
    const partes = nomeCompleto.split(' ');

    const ultimoSobrenome = partes.pop();

    const restoDoNome = partes.map(nome => nome.charAt(0).toUpperCase());

    const nomeFormatado = ultimoSobrenome.toUpperCase() + ', ' + restoDoNome.join('. ') + '. ';
    
    return nomeFormatado;
}

const nomeCompleto = 'Alan Mathison Turing';
const nomeFormatado = formatarNome(nomeCompleto);
console.log(nomeFormatado);