let foguetes = [
    { pais: 'brasil', lancamentos: 32, populacao: 6, palavra: 'hello', fruta: 'abacaxi' }, 
    { pais: 'argentina', lancamentos: 5, populacao: 4, palavra: 'world', fruta: 'manga' },
    { pais: 'butão', lancamentos: 24, populacao: 4, palavra: '!', fruta: 'banana' }
];

console.log('Quantidade de população mundial em 2018: ' +
    foguetes
        .map( item1 => { item1.populacao += 1000; return item1; } )
        .filter( item2 => { return item2.fruta != 'banana' } )
        .reduce( (soma, item3) => { return soma += item3.populacao }, 0 )
);