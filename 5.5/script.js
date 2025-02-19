let number = parseInt(prompt('Введіть число > 0', ''));

while (number % 3 === 0) {
    number /= 3;
    if(number === 1) {
        document.write(`<p>можна отримати шляхом возведення числа 3 в ступінь</p>`);
    }
}