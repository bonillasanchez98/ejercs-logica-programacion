//4- Dado el siguiente arreglo: let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
//Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor;

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let maxNum = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= maxNum){
        maxNum = numbers[i];
    }
}
console.log('El numero mayor del arreglo es:',maxNum);


