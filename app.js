const header = document.querySelector('header');

function checkScrollPosition() {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 70) {
    header.classList.add('red', 'scroll-header');
  } else {
    header.classList.remove('red', 'scroll-header');
  }
}

document.addEventListener('DOMContentLoaded', checkScrollPosition);
window.addEventListener('scroll', checkScrollPosition);

const langArr = {
  title: {
    eng: 'Portfolio Website',
    ru: 'Сайт портфолио',
  },
  menuMain: {
    eng: 'Main',
    ru: 'Главная',
  },
  menuPortfolio: {
    eng: 'Some projects',
    ru: 'Проекты',
  },
  menuAbout: {
    eng: 'About',
    ru: 'Обо мне',
  },
  menuContacts: {
    eng: 'Contacts',
    ru: 'Контакты',
  },
  textHi: {
    eng: 'Hi, my name is',
    ru: 'Привет, меня зовут',
  },
  textName: {
    eng: 'Alex',
    ru: 'Александр',
  },
  textInfo: {
    eng: "and i'm student at Estonian Entrepreneurship University of Applied Sciences",
    ru: 'и я студент Эстонского Университета Предпринимательства Майнор',
  },
  portfolio: {
    eng: '{ Some apps }',
    ru: '{ Мои приложения }',
  },
  about: {
    eng: '{ AboutMe }',
    ru: '{ Обо мне }',
  },
  aboutMe: {
    eng: "I'm Alex and...",
    ru: 'Меня зовут Александр и...',
  },
  contact: {
    eng: '{ Contacts }',
    ru: '{ Мои Контакты }',
  },
  ContactName: {
    eng: 'Name',
    ru: 'Имя',
  },
  ContactAdress: {
    eng: 'Adress',
    ru: 'Адрес',
  },
  ContactPhone: {
    eng: 'Phone',
    ru: 'Номер телефона',
  },
  ContactMsg: {
    eng: 'Message Me',
    ru: 'Свяжитесь со мной',
  },
  sendBtn: {
    eng: 'Send',
    ru: 'Отправить',
  },
};

const select = document.querySelector('select');
select.addEventListener('change', changeUrlLanguage);

const allLangArr = ['eng', 'ru'];

function changeUrlLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  console.log(lang);
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLangArr.includes(hash)) {
    location.href = window.location.pathname + '#eng';
    location.reload();
  }

  select.value = hash;
  document.querySelector('title').innerHTML = langArr['title'][hash];

  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
