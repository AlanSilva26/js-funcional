let foguetes = [
    { pais: 'brasil', lancamentos: 32, populacao: 6, palavra: 'hello' }, 
    { pais: 'argentina', lancamentos: 5, populacao: 4, palavra: 'world' },
    { pais: 'butão', lancamentos: 24, populacao: 4, palavra: '!' }
];

function soma (lista = []) {
    var soma = 0;

    for (var i = 0; i < lista.length; i++) {
        soma += lista[i].lancamentos;
    }

    return soma;
}

// console.log('somatorio => ' + soma(foguetes))
console.log(foguetes.reduce( (frase, item) => { return frase += item.palavra + ' ' }, 'A frase eh: ' ))