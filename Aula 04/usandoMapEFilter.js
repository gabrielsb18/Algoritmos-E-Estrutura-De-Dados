function isEvery(x){
    // devolve true e x for múltiplo de 2
    // console.log(x)
    retunr(x % 2 === 0) ? true : false;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const myMap = numbers.map(isEven)

numbers.some(myMap);

///USANDO O METODO FILTER
const evenNumbers = numbers.filter(isEven)