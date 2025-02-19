let number = parseInt(prompt('Введіть число > 1', ''));
let primeNumber = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        primeNumber = false;
        document.write(`<p>не просте число</p>`);
        break;
    }
}

if (primeNumber && number > 1) {
    document.write(`<p>просте число</p>`);
}