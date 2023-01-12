//2- Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
function convertKmToMilles(kms:number){
    const MILLES = 0.62;
    return kms * MILLES;
}
let kms = 10;
console.log(kms + 'kilometros es igual a ' + convertKmToMilles(kms));