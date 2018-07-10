var linkMap = document.querySelector('.min-map');
var modalMap = document.querySelector('.modal--map');
var linkWrite = document.querySelector('.contacts__btn');
var modalWrite = document.querySelector('.modal--write-us');

var form = modalWrite.querySelector('form');
var userName = modalWrite.querySelector('[name=your-name]');
var email = modalWrite.querySelector('[name=your-email]');
var emails = modalWrite.querySelector('[name=text-emails]');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
    storageName = localStorage.getItem('userName');
    storageEmail = localStorage.getItem('email');
} catch (err) {
    isStorageSupport = false;
}

form.addEventListener('submit', function (evt) {
    if (!userName.value || !email.value || !emails.value) {
        evt.preventDefault();
        modalWrite.classList.remove('modal--error');
        modalWrite.offsetWidth = modalWrite.offsetWidth;
        modalWrite.classList.add('modal--error');
    } else { 
    if (isStorageSupport) { 
        localStorage.setItem('userName', storageName.value); 
        localStorage.setItem('email', storageEmail.value); 
        }
    }
});

linkMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.add('modal--show');
});

linkWrite.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalWrite.classList.add('modal--show');

    if (storageName) {
      userName.value = storageName;
      email.value = storageMail;
      emails.focus();
    } else {
      userName.focus();
    }
});

var closeMap = modalMap.querySelector('.modal__close')
var closeWrite = modalWrite.querySelector('.modal__close')

closeMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.remove('modal--show');
});
closeWrite.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalWrite.classList.remove('modal--show');
    modalWrite.classList.remove('modal--error');
});
window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      var modal = document.querySelector('.modal--show');
      if (modal.classList.contains('modal--show')) {
        modal.classList.remove('modal--show');
        modalWrite.classList.remove('modal--error');
      }
    }
});
