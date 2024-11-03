// Project 5 create a 'my form'

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
// Function to activate button
function activateButton() {
  const form = document.getElementById('myForm');
  const submitButton = form.querySelector('input[type="submit"]');
  const nameInputs = form.querySelectorAll('#firstName, #lastName');

  // Function to check if all inputs are filled
  function checkInputs() {
    let allFilled = true;
    nameInputs.forEach((input) => {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });
    submitButton.disabled = !allFilled;
  }
  // Add event listeners to each required imput
  nameInputs.forEach((input) => {
    input.addEventListener('input', checkInputs);
  });

  checkInputs();
}

// Function to activate email input when checkbox is clicked
function activateEmailInput() {
  const form = document.getElementById('myForm');
  const checkbox = form.querySelector('input[id="emailCheckbox"]');
  const emailInput = form.querySelector('input[id="email"]');

  emailInput.style.display = checkbox.checked ? 'block' : 'none';

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      emailInput.style.display = 'block';
    } else {
      emailInput.style.display = 'none';
    }
  });

  // Function to post names to API using fetch.
  function postData() {
    fetch(apiUrl, {
      method: 'POST',
      heaaders: {
        'Content-Type': 'apllication/json',
      },
      body: JSON.stringify({ key: value }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('success', data);
      })
      .catch((error) => {
        console.error('error:', error);
      });
  }
}

document.addEventListener('DOMContentLoaded', activateButton);
document.addEventListener('DOMContentLoaded', activateEmailInput);
