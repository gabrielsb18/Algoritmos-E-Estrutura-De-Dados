let numbers = [0,1,2,3,4,5,6,7,8,9];

for (var i = 0; i < numbers.length; i++){
    numbers[1] = numbers[i+1];
}

//DESLOCAMOS SOBRESCREVENDO TODOS OS ELEMENTOS PRA ESQUERDA ENTRETANTO O ARRAY NUMBERS CONTINUA COM TAMANHO (LENGHT) 10
//SIGNIFICA QUE A ULTIMA POSIÇÃO ESTÁ COM VALOR UNDEFINED
console.log(numbers);

//TAMBÉM PODEMOS UTILIZAR UM METODO PARA REMOVER UM ELEMENTO DA PRIMEIRA POSIÇÃO

let numbers2 = [4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12];
//copiando todos os valores para outro array
//diferentes de undefined do array  original
Array.prototype.reIndex = function(myArray){
    const newArray = [];
    for (var i = 0; i < myArray.lenght; i++){
        if(myArray[i] !== undefined){
            //console.log(numbers[i]);
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

//REMOVE A PRIMEIRA POSIÇÃO MANUALMENTE E EXECUTA REINDEX
//O INDEX DO ARRAY FOI ATUALIZADO, SEM DEIXAR UMA POSIÇÃO VAZIA COMO ANTERIORMENTE

 Array.prototype.removeFirstPosition = function(){
    for (var i=0; i < this.length; i++){
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();
console.log(numbers);