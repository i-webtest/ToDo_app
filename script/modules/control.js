import { addToList, renderList } from './render.js';
import {getStorage, removeStorage} from './serviceStorage.js';
import {whichID} from "./authorisation.js";


const completeTask = (key, i) => {
  const list = getStorage(key);
  list[i - 1].status = !(list[i - 1].status);
  localStorage.setItem(key, JSON.stringify(list))
}

export const formControl = (form, username, table) => {
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
    const item = e.target.querySelector('input').value;

    if (item.trim()) {
      addToList(username, item, table);
    }
    e.target.querySelector('input').value = '';


    form.reset();
    button.disabled = true;
  });
};


export const tableControl = (table, username) => {
  table.tbody.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.btn-danger')) {
      removeStorage(username, parseInt(whichID(target)));
      renderList(username, table);
    }

    if (target.closest('.btn-success')) {
      completeTask(username, parseInt(whichID(target)));
      renderList(username, table);
    }
  });
};
