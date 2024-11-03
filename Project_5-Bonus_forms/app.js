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
document.addEventListener('DOMContentLoaded', activateButton);
