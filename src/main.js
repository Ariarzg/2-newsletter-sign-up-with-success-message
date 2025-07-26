import './styles/style.scss';

const emailInput = document.getElementById('email');
const form = document.getElementById('form');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let isEmailValid = emailValidity();

form.addEventListener('submit', (e) => {
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
  form.classList.add('email-invalid');

  if (isEmailValid) {
    form.classList.remove('email-invalid');
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
