const dialog = document.getElementById('info-dialog');
// Keep the click feedback visible briefly, including for keyboard activation.
document.querySelectorAll('.metal-button').forEach(button => {
  let feedbackTimer;
  button.addEventListener('click', () => {
    clearTimeout(feedbackTimer);
    button.classList.add('is-pressed');
    feedbackTimer = setTimeout(() => button.classList.remove('is-pressed'), 180);
  });
  button.addEventListener('blur', () => {
    clearTimeout(feedbackTimer);
    button.classList.remove('is-pressed');
  });
});
function showInfo(title, message) {
  document.getElementById('dialog-title').textContent = title;
  document.getElementById('dialog-message').textContent = message;
  dialog.showModal();
}
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
document.getElementById('login-form').addEventListener('submit', event => {
  event.preventDefault();
  const status = document.getElementById('login-status');
  status.hidden = false;
  status.textContent = 'Local preview only. No account service is connected.';
  document.getElementById('password').value = '';
});
document.getElementById('forgot').addEventListener('click', event => {
  event.preventDefault();
  showInfo('Forgot your password?', 'This is a local website reproduction. Password recovery is not connected to an account service.');
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('nav a').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}));
document.querySelectorAll('[data-comments]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showInfo(link.textContent, 'The reference shows a comment count only. Comment content is not included in this local reproduction.');
}));
document.querySelectorAll('[data-info]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showInfo(link.dataset.info, ['CSS', 'XHTML'].includes(link.dataset.info) ? 'This page is built with local HTML, CSS and JavaScript files.' : 'This local preview does not collect or send personal information. The reference does not include the full policy text.');
}));
