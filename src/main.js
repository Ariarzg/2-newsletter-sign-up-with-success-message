import './style.scss';

const emailInput = document.getElementById('email');
const validationError = document.querySelector('.validation-error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let isEmailValid = emailValidity();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  showEmailValidity();

  if (isEmailValid) {
    window.location = '../pages/success.html';
  }
});

emailInput.addEventListener('change', () => {
  isEmailValid = emailValidity();

  showEmailValidity();
});

function showEmailValidity() {
  emailInput.classList.add('email-invalid');
  validationError.classList.remove('hidden');

  if (isEmailValid) {
    emailInput.classList.remove('email-invalid');
    validationError.classList.add('hidden');
  }
}

function emailValidity() {
  if (emailRegex.test(emailInput.value)) {
    console.log(emailInput.value);

    localStorage.setItem('ariarzg-email-validated', emailInput.value);
    return true;
  }
  return false;
}
