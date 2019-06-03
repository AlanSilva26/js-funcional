let foguetes = [
    { pais: 'brasil', lancamentos: 32 },
    { pais: 'argentina', lancamentos: 5 }
];

function lista (dados = []) {
    for (var i = 0; i < dados.length; i++) {
        console.log(dados[i].pais);
    }
}

console.log(foguetes.map( item => item.pais ));

// foguetes.map( item => console.log(item.pais) );

// lista(foguetes);