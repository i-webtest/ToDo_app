import { auth, formControl } from './control.js';
import { createForm, createHeader, createRow, createTable } from './createElements.js';

/*
import { addClass } from './control.js';
import * as element from './createElements.js';

const renderToDo = () => {
  const containerApp = addClass('.app-container');
  const h3 = element.createTitle();
  // const buttonGroup = element.createButtonsGroup([
  //   {
  //     className: 'btn btn-primary me-3',
  //     type: 'submit',
  //     textContent: 'Сохранить',
  //     disabled: true,
  //   },
  //   {
  //     className: 'btn btn-warning',
  //     type: 'reset',
  //     textContent: 'Очистить',
  //   },
  // ]);
  const form = element.createForm();
  const table = element.createTable();
  const tableWrapper = element.createTableWrapper();

  containerApp.append(h3, form, tableWrapper);
  tableWrapper.append(table);
  // containerApp.append(form);
  // form.append(buttonGroup);

  return {
    // h3,
    // btnAdd: buttonGroup.btns[0],
    // btnDel: buttonGroup.btns[1],
    form,
    list: table.tbody,
  };
};

const renderTask = (elem, data) => {
  const allRow = data.map(element.createRow);
  elem.append(...allRow);
  return allRow;
};

export default { renderToDo, renderTask };
*/

export const renderTask = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};

// export const renderList = (key, table) => {
//   table.tbody.innerHTML = '';
// };

// export const addList = (key, name, table) => {
//   const obj = {
//     name,
//     status: false,
//   };

//   renderList(key, table);
// };

export const renderToDo = () => {
  const container = document.querySelector('.app-container');
  container.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

  const header = createHeader();
  const form = createForm();
  const { tableWrapper, table } = createTable();

  container.append(header, form, tableWrapper);

  // const user = auth();

  // renderList(user, table);
  // formControl(form, user, table);
  return {
    list: table.tbody,
    form,
  };
};
