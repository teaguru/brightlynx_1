var sum = document.getElementById('button');

sum.addEventListener('click', getN); //создадим обработчик

function getN() {
    var getSum = parseFloat(document.getElementById('num_1').value) + parseFloat(document.getElementById('num_2').value);
    alert("Результат" + "\n" + +getSum.toFixed(10) ); //Всё дело в том, что в стандарте IEEE 754 на число выделяется ровно 8 байт(=64 бита), не больше и не меньше.
}