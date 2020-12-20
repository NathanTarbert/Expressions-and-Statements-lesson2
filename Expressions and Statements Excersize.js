2D Rectangle Area
function rectangle(length,width){
   let area = length * width
   let parimeter = 2*(length + width)
    console.log(area);
    console.log(parimeter);
}

rectangle(40,50);
rectangle(30,40);
rectangle(600,500);

//Currency Converter
function currencyConverter(currencyUSD){
    currencyUSD = Number(currencyUSD);
    let bgn = 1.79549;
    let conversion = bgn * currencyUSD;
    let answer = conversion.toFixed(2);

    console.log(`${answer} BGN`);
}

currencyConverter(20);
currencyConverter(100);
currencyConverter(12.5);
