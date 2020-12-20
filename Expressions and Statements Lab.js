//Calculate Speed
function calculateSpeed(distance,time){
distance = Number(distance);
time = Number(time);
let speed = distance / time;
console.log(speed);

}

calculateSpeed(15,2);
calculateSpeed(20,5);
calculateSpeed(50,25);

//Problem 2: Currency Converter
function Prob2CurrencyConverter(currencyEUR){
    currencyEUR = Number(currencyEUR);
    let currencyUSD = 0.88;
    let conversion = currencyUSD * currencyEUR;
    let answer = conversion.toFixed(2);
    console.log(`${answer} EUR`);
}
Prob2CurrencyConverter(17);
Prob2CurrencyConverter(87);
Prob2CurrencyConverter(42);

//Problem 3 lab. Inches to Centimeters
function inchesToCentimeters (centimeters){
centimeters = Number(centimeters);
let inches = 2.54;
let conversion = inches * centimeters;
console.log(conversion);


}
inchesToCentimeters(21);
inchesToCentimeters(71);
inchesToCentimeters(87);
inchesToCentimeters(4);
