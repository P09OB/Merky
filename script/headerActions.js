const backArrow = document.querySelector('.back-link');
backArrow.addEventListener('click', () => {
  history.back();
  return false;
})