var sum = document.getElementById('button');

sum.addEventListener('click', getN);

function getN() {
    var getSum = parseFloat(document.getElementById('num_1').value) + parseFloat(document.getElementById('num_2').value);
    alert( +getSum.toFixed(10) );
}