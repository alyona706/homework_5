let number = parseInt(prompt('Введіть число > 0', ''));

let minNum = 1;
let maxNum = 100;

for(minNum; minNum <= maxNum; minNum++) {
    let result = minNum * minNum;
    if(result < number) {
        document.write(`<p>${result}</p>`);
    }
}