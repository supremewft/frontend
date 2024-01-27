document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to each operator button
  document.getElementById('add').addEventListener('click', function () {
      calculate('add');
  });

  document.getElementById('sub').addEventListener('click', function () {
      calculate('sub');
  });

  document.getElementById('mult').addEventListener('click', function () {
      calculate('mult');
  });

  document.getElementById('div').addEventListener('click', function () {
      calculate('div');
  });
});

function calculate(operation) {
  // Get the values of num1 and num2
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  // Check if the input is valid
  if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers.');
      return;
  }

  // Perform the calculation based on the selected operation
  var result;
  switch (operation) {
      case 'add':
          result = num1 + num2;
          break;
      case 'sub':
          result = num1 - num2;
          break;
      case 'mult':
          result = num1 * num2;
          break;
      case 'div':
          // Check if dividing by zero
          if (num2 === 0) {
              alert('Cannot divide by zero.');
              return;
          }
          result = num1 / num2;
          break;
      default:
          alert('Invalid operation.');
          return;
  }

  // Display the result
  document.getElementById('result').textContent = 'Result: ' + result;
}
