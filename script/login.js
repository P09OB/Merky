const login = document.querySelector('.login-btn');
const register = document.querySelector('.register-btn');
const authContainer = document.querySelector('.auth-container');
const authBtn = document.querySelector('.auth-done');

login.addEventListener('click', () => {
  authContainer.style.bottom = '0'; 
})

register.addEventListener('click', () => {
  authContainer.style.bottom = '0'; 
})

authBtn.addEventListener('click', () => {
  window.location = './list.html'
})