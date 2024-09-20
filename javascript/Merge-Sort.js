let a1 = [5, 4, 3, 2, 1];
let a2 = [6, 3, 7, 8, 9, 10, 30, 20, 15];
const union = [];

for (let i = 0; i < a1.length; i++) {

    //*NO guardar elemento iguales
    if (!union.includes(a1[i])) {
        union.push(a1[i]);
    }
}

for (let i = 0; i < a2.length; i++) {

    //*Para no repetir ningun elemento igual
    if (!union.includes(a2[i])) {
        union.push(a2[i]);
    }
}

//*Para ordenar el array numerico correctamente
const comparacion = (a, b) => {
    // -1 a se va situar en un inice menor a b
    //0, no har cambios
    //1, b se va asituar en un indice menor a a
    return a - b;
};
union.sort(comparacion); //*Para ordenara el array
console.log(union);
