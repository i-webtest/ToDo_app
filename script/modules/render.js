import { auth } from './authorisation.js';
import { tableControl, formControl } from './control.js';
import { createForm, createHeader, createRow, createTable } from './createElements.js';
import { getStorage, setStorage } from './serviceStorage.js';

export const renderList = (key, table) => {
  table.tbody.innerHTML = '';
  getStorage(key).forEach((entry) => {
    table.tbody.append(createRow(entry, key, table));
  });
};

export const addToList = (key, name, table) => {
  const object = {
    name,
    status: false,
  };
  setStorage(key, object);
  renderList(key, table);
};

export const renderTodoApp = () => {
  const container = document.querySelector('.app-container');
  container.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

  const header = createHeader();
  const form = createForm();
  const { tableWrapper, table } = createTable();

  container.append(header, form, tableWrapper);

  const username = auth();

  formControl(form, username, table);
  tableControl(table, username);
  renderList(username, table);
};

