//DIFERENTES FORMAS DE INICIALIZAR UM ARRAY

let daysOfWeek = new Array();

daysOfWeek = new Array(7);

daysOfWeek = new Array["Sunday", "Monday", "Tuesday", "Mednesday", "Thursday", "Friday", "Saturday"];

let daysOfWeek2 = [];

let daysOfWeek3 = ["Sunday", "Monday", "Tuesday", "Mednesday", "Thursday", "Friday", "Saturday"];

console.log(daysOfWeek.length);

//PERCORRENDO ELEMENTOS DE UM ARRAY
for (let i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}