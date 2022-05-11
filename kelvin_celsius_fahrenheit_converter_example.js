//Coverting Kelvin to Celsius and then Fahrenheit
const kelvin=283;
// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin
var celsius=kelvin-273;
//Fahrenheit = Celsius * (9/5) + 32
var fahrenheit=celsius*(9/5)+32;
// convert from Celsius to Fahrenheit, you often get a decimal number
fahrenheit=Math.floor(fahrenheit);
console.log(`The ${kelvin} Kelvin temperature is ${fahrenheit} in Fahrenheit and ${celsius} in Celsius.`);
