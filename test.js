// importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// test currency converter
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
    //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One dollar should be 106.58 yen", function(){
    // importo la funcion desde app.js
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(2)).toBe(213.16666666666669); 
    //1 dollar son 106.58 JPY, entonces 2 USD deberian ser = (2 * 106.58)
})
test("1000 yen should be 106.58 yen", function(){
    // importo la funcion desde app.js
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1000)).toBe(6.254886630179828); 
    //1 yen son 0,006254886630179828 GBP, entonces 1000 yen deberian ser = (1000 * 0,006254886630179828)
})