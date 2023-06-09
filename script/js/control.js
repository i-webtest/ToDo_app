// import { addList } from './render.js';

/*
import { createRow } from './createElements.js';

export const addClass = (className) => {
  const classes = ['vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column'];
  const container = document.querySelector(className);
  container.classList.add(...classes);
  return container;
};

export const addCasePage = (list, task) => {
  list.append(createRow(task));
};

export const formControl = (form, list) => {
  const input = document.querySelector('.form-control');
  const button = document.querySelector('.btn-primary');

  input.addEventListener('input', (e) => {
    const target = e.target.value;

    if (target === '') {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newCase = Object.fromEntries(formData);

    addCasePage(newCase, list);
    addCaseData(newCase);

    form.reset();
  });
};
*/
export const auth = () => {
  const user = prompt('Введите своё имя');

  user.trim() ? user.trim() : auth();
};

export const formControl = (form, name, table) => {
  const input = document.querySelector('.form-control');
  const button = document.querySelector('.btn-primary');

  input.addEventListener('input', (e) => {
    const target = e.target.value;

    if (target.trim() === '') {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);
    console.log('newTask: ', newTask);

    // addList(name, table);
    // addCaseData(newCase);
    button.disabled = true;

    form.reset();
  });
};
