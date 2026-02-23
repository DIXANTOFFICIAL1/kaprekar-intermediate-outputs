const form = document.getElementById('inputForm');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', function(event) {
event.preventDefault(); 
let number = document.getElementById('number').value;
if (number.length < 3 || number.length > 5 || isNaN(number)) {
alert("OUT OF RANGE");
return;
}
let result = performKaprekarRoutine(number);
outputDiv.innerHTML = result.join('<br>');
});
function performKaprekarRoutine(number) {
let results = [];
let currentNumber = number;
let count = 0;
while (count < 7) {
let descNum = currentNumber.split('').sort().reverse().join('').padStart(number.length, '0'); 
let ascNum = currentNumber.split('').sort().join('').padStart(number.length, '0'); 
let newNumber = (parseInt(descNum) - parseInt(ascNum)).toString().padStart(number.length, '0');
results.push(`${descNum} - ${ascNum} = ${newNumber}`);
if (newNumber === currentNumber) {
break;
}
currentNumber = newNumber;
count++;
}
return results;
}
