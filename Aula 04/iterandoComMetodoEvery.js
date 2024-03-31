//O método every() itera pelos elementos do array até que a função devolva false 

function isEvery(x){
    console.log(x);
    retunr(x%2===0) ? true : false;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.every(isEven);