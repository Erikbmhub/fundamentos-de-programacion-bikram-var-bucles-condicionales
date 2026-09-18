//Variables
//Prueba
let variableSinValor = ''
let booleano1 = true
let booleano2 = false
const PI = 3.14
const TAU = 2 * PI

//Booleanos

let booleanoAnd = booleano1 && booleano2    
let booleanoNot = !booleano1    
let booleanoMix0 = (booleano1 || booleano2) && (booleano1  || (booleano1 && !booleano2))

//Operadores

let incrementarDesp = 2
let postIncremento = ++incrementarDesp
resultadoDesp = postIncremento 
console.log(resultadoDesp)

//Bucles

const contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) { 
    contarHasta10_2++
}
console.log(contarHasta10_2);

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
    postI += postJ++;
}

console.log(postI);

let sumaPares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

console.log(sumaPares)

//Variables
//13.
let variableValorNumerico = 5
//14.
const MiNombre = 'Erik'
//15.
const MiNumeroFav = 7

//Booleanos
//16.
let booleanoOr = booleano1 || booleano2;
//17.
let booleanoMix1 = (booleano1 && (TAU / 2 === PI)) || (variableValorNumerico >= MiNumeroFav);
//18.
let seisNoEsNueve = 6 !== 9;
//19.
let booleanoMix2 = (variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav * TAU));

//Operadores

//20.
let valorSuma = MiNumeroFav + variableValorNumerico;
//21.
let valorResta = MiNumeroFav - variableValorNumerico;
//22.
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
//23.
let valorDivision = MiNumeroFav / variableValorNumerico;

//Bucles
//24.
let contarHasta10 = 0;
while (contarHasta10 !== 10) {
    contarHasta10++;
}
console.log(contarHasta10); 
//25.
let preI = 0;
let preJ = 0;
for (let i = 0; i < 11; i++) {
    preI += ++preJ;
}
console.log(preI);
//26.
let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;
    }
}

console.log(sumaImpares);
