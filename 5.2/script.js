let dollarVal = 42;
let startVal = 10;
let endVal = 100;
let stepVal = 10;

for(startVal; startVal <= endVal; startVal += stepVal) {
    document.write(`<p>${startVal * dollarVal}</p>`);
}