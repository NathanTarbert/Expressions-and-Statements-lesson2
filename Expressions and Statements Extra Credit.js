// Problem 1 Currency Converter
// Write a program, which converts an amount of money from one currency to another. The following currencies
// // should be supported: BGN , USD , EUR , GBP. Use the following fixed exchange rates:
// // BGN USD EUR GBP
// 1 1.79549 1.95583 2.53405

function currencyConverterToBGN(amountOFCurrency,currencyOne,currencyTwo) {
    
    var currencyTotal = 0;
    var usd = 1.79549;
    var eur = 1.95583;
    var gbp = 2.53405;
    var bgn = 1;
    var usdBGN = 0;
    var bgnEUR = 0;
    var gbpEUR = 0;
    var eurUSD = 0;

    if((currencyOne.toLowerCase() == "usd") && (currencyTwo.toLowerCase() == "bgn")){
        usdBGN = (amountOFCurrency * (bgn / usd));
        console.log(`${usdBGN.toFixed(2)} BGN`);
    }else if((currencyOne.toLowerCase() == "bgn") && (currencyTwo.toLowerCase() == "eur")){
        bgnEUR = (amountOFCurrency * (eur / bgn));
        console.log(`${bgnEUR.toFixed(2)} EUR`);
    }else if(((currencyOne.toLowerCase() == "eur") && (currencyTwo.toLowerCase() == "gbp"))){
        (gbpEUR = (amountOFCurrency * (gbp / eur)));
        console.log(`${gbpEUR.toFixed(2)} GBP`);
    }else if((currencyOne.toLowerCase() == "usd") && (currencyTwo.toLowerCase() == "eur")){
        (eurUSD = amountOFCurrency * (eur / usd));
        console.log(`${eurUSD.toFixed(2)} EUR`);
    }
    

}


// currencyConverterToBGN(20,"USD","BGN");
// currencyConverterToBGN(100,"BGN","EUR");
// currencyConverterToBGN(12.35, "EUR", "GBP");
currencyConverterToBGN(150.35,"USD","EUR");


// Dance Hall
// function danceHall(lengthHall,widthHall,sizeWD){

// let hallsize = (lengthHall * 100) * (widthHall * 100);
// let wardrobe = (sizeWD * 100) * (sizeWD * 100);
// let benchsize = hallsize / 10;
// let freeSpace = hallsize - wardrobe - benchsize;
// let danceNums = freeSpace / (40 + 7000);
//  danceNums = Math.round(danceNums);
//     console.log(danceNums);
// }
// danceHall(50,25,2);
// danceHall(40,32,1);


// Extra Credit Charity CAmpaign-

// function charityCampaign(numDays,numBakers,numCakes,numWaffles,numPancakes){

// profitCakes = numCakes * 45;
// profitWaffles = numWaffles * 5.80;
// profitPancakes = numPancakes * 3.20;
// let totalPerDay = (profitCakes + profitWaffles + profitPancakes) * numBakers;
// let campaign = totalPerDay * numDays;
// let charityPay = campaign * .125;
// let profit =  campaign - charityPay;
// console.log(profit.toFixed(2));

// }
// charityCampaign(20,8,14,30,16);
// charityCampaign(131,5,9,33,46);

// // Extra credit Alcohol Market
// function alcoholMarket(whiskeyNumsUSD,beerNums,wineNums,rakiaNum,whiskeyLiters){
// let rakiaLiter = whiskeyNumsUSD / 2; //=25
// let wineLiter = rakiaLiter - (0.4 * rakiaLiter);
// let beerLiter = rakiaLiter - (0.8 * rakiaLiter);
// let totalRakia = rakiaNum * rakiaLiter;
// let totalWine = wineNums * wineLiter;
// let totalBeer = beerLiter * beerNums;
// let totalWhiskey = whiskeyLiters * whiskeyNumsUSD;

// let totalMoney = totalRakia + totalWine + totalBeer + totalWhiskey;

// console.log(totalMoney.toFixed(2));

// }
// alcoholMarket(50,10,3.5,6.5,1);
// alcoholMarket(63.44,3.57,6.35,8.15,2.5);


// function firtNumber(n){
// let sum = 1;
// let result = "1";

// for(let i = 2; i <= n; i += 1){
//     result = result + "+" + i;
//     sum += i;
//  }   
//     console.log(total);


// }

// firtNumber(5);
