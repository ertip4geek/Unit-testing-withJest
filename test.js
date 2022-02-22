// importar las funciones del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// test currency converter
test("One euro should be 1.206 dollars", () => {
    const dollar = fromEuroToDollar(3.5); //Arrange

    //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const result = 3.5 * 1.2; //Act

    // hago mi comparacion (la prueba para el unit test)
    expect(result).toBe(dollar); //Assert
    
})

test("One dollar should be 106.58 yen", () => {
    const JPY = fromDollarToYen(3.0);  //Arrange
    //1 dollar son 106.58 JPY, entonces 2 USD deberian ser = (2 * 106.58)
    const result = (3.0/1.2)*127.9;  //Act
    // hago mi comparacion (la prueba para el unit test)
    expect(result).toBe(JPY); //Assert
    
})
test("1000 yen to Pound sterling", () => { 
    const JPY = fromYenToPound	(100.0);  //Arrange
    //1 yen son 0,006254886630179828 GBP, entonces 1000 yen deberian ser = (1000 * 0,006254886630179828)
    const result = (100.0/127.9)*0.8; //Act
    // hago mi comparacion (la prueba para el unit test)
    expect(result).toBe(JPY); //Assert
})