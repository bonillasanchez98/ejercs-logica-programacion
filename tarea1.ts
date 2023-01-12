//1- Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )
function poundsConvert(pounds:number = 1){
    const KGS = 0.4536;
    return pounds * KGS;
}

let pounds = 150;
console.log(pounds + 'lbs es igual a: ' + poundsConvert(150) + 'Kgs');