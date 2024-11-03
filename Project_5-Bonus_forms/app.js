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
}

document.addEventListener('DOMContentLoaded', activateButton);
document.addEventListener('DOMContentLoaded', activateEmailInput);
