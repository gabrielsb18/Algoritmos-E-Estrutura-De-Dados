//COM O METODO SPLICE PODEMOS REMOVER UM ELEMENTO DE DETERMINADA POSIÇÃO

//O METODO SPLICE, POP, SHIFT SÃO USADOS PARA FAZER A REINDEXAÇÃO DE ELEMENTOS

let numbers = [0,1,2,3,4,6,7,8,9];
numbers.splice(5,3);
//MOSTRANDO CONTEÚDO DO ARRAY
console.log(numbers.join(", "));

//ADICIONANDO  OU REMOVENDO ELEMENTOS DE UMA POSIÇÃO ESPECIFICA

let numbers2 = [0,1,2,3,4,5,6,7,8,9];
numbers.splice(5,3);
console.log(numbers.join(', '));

//Reinserindo os três elementos (5,6,7) a partir da posição 5
//o parámetro 0 será a quantidade de números excluídos
numbers.splice(5, 0, 5, 6, 7);

console.log(numbers.join(", "));