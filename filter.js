let foguetes = [
    { pais: 'brasil', lancamentos: 32, populacao: 6 }, 
    { pais: 'argentina', lancamentos: 5, populacao: 4 }
];

function filtro (lista) {
    var listaRetorno = [];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].pais == 'brasil')
            listaRetorno.push(lista[i]);
    }

    return listaRetorno;
}

// console.log(filtro(foguetes));
console.log(foguetes.filter( item => { return item.populacao; } ))