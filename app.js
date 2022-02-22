// conocemos y declaramos el valor de 1 EUR
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// fromEuroToDollar	monto en euros	monto equivalente en dólares estadounidenses
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs['USD'];
    // retornamos el valor
    return valueInDollar;
}
// fromDollarToYen	monto en dólares	monto equivalente en yenes japoneses
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar / oneEuroIs['USD'] ;
    // retornamos el valor
    return valueInYen * oneEuroIs['JPY'];
}
// fromYenToPound	monto en yenes	monto equivalente en Libras esterlinas
const fromYenToPound  = function(valueInYen){
    // convertimos el valor a Libras
    let valueInEuro = valueInYen / oneEuroIs['JPY'];
    // retornamos el valor
    return valueInEuro * oneEuroIs['GBP'];
}

console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

