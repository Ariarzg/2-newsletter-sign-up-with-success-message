import './success.scss';

const email = localStorage.getItem('ariarzg-email-validated');
document.getElementById('success').innerHTML = `
  <img src="../icon-success.svg" alt="success icon">
  <h1>Thanks for subscribing!</h1>
  <p>A confirmation email has been sent to
  <span class="sent-to">${email}</span>.
  Please open it and click the button inside to confirm your subscription.</p>
  <button class="dismiss">Dismiss message</button>
`;

document.querySelector('.dismiss').addEventListener('click', () => {
  window.location = '../index.html';
});
