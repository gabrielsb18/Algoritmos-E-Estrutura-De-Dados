let numbers = [0,1,2,3,4,5,6,7,8,9];

//ADICIONANDO O ELEMENTO NA ULTIMA POSIÇÃO LIVRE
numbers[numbers.length] = 10;

//UTILIZANDO O METODO PUSH
numbers.push(11);
numbers.push(12,13);

console.log(numbers);
//SE QUISER CONVERTER EM UMA STRING É SO CONCATENAR COM UMA VÍRGULA
console.log(numbers.join(', '));

//INSERINDO ELEMETO NA PRIMEIRA POSIÇÃO
//PARA INSERIR ELE, DEVEMOS DEIXAR A PRIMEIRA POSIÇÃO LIVRE, DESLOCANDO OS ELEMENTOS PARA A DIREITA

function insertFirstPosition(value) {
    for (let i = numbers.lenght; i>=10; i--){
        numbers[i] = numbers[i -1];
    }
    numbers[0] =  value
};

insertFirstPosition(-1);
console.log(numbers.join(', '));