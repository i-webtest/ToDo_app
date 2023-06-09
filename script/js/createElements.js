/*
export const createTitle = () => {
  const h3 = document.createElement('h3');
  h3.textContent = 'Todo App';
  return h3;
};

export const createButtonsGroup = (params) => {
  const btns = params.map(({ className, type, text, disabled }) => {
    const button = document.createElement('button');
    button.className = className;
    button.type = type;
    button.textContent = text;
    button.disabled = disabled;
    return button;
  });

  return { btns };
};

export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');

  form.insertAdjacentHTML(
    'beforeend',
    `
      <label class="form-group me-3 mb-0">
        <input type="text" class="form-control" placeholder="ввести задачу">
      </label>
    `,
  );

  const buttonGroup = createButtonsGroup([
    {
      className: 'btn btn-primary me-3',
      type: 'submit',
      text: 'Сохранить',
      disabled: true,
    },
    {
      className: 'btn btn-warning',
      type: 'reset',
      text: 'Очистить',
    },
  ]);

  form.append(...buttonGroup.btns);

  return form;
};

export const createTableWrapper = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');
  return tableWrapper;
};

export const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML(
    'beforeend',
    `
      <tr>
        <th>№</th>
        <th>Задача</th>
        <th>Статус</th>
        <th>Действия</th>
      </tr>
    `,
  );

  const tbody = document.createElement('tbody');

  table.append(thead, tbody);
  table.tbody = tbody;

  return table;
};

export const createRow = ({ title, status }, index) => {
  const tr = document.createElement('tr');
  if (status === 'Выполнена') {
    tr.classList.add('table-success');
  } else {
    tr.classList.add('table-light');
  }

  const tdNumber = document.createElement('td');
  tdNumber.textContent = index + 1;

  const tdTask = document.createElement('td');
  tdTask.textContent = title;
  if (status === 'Выполнена') tdTask.classList.add('text-decoration-line-through');

  const tdStatus = document.createElement('td');
  tdStatus.textContent = status;

  const tdActions = document.createElement('td');

  const btnDel = document.createElement('button');
  btnDel.classList.add('btn', 'btn-danger');
  btnDel.textContent = 'Удалить';

  const btnComplete = document.createElement('button');
  btnComplete.classList.add('btn', 'btn-success');
  btnComplete.textContent = 'Завершить';

  tdActions.append(btnDel, btnComplete);
  tr.append(tdNumber, tdTask, tdStatus, tdActions);

  return tr;
};
*/
export const createHeader = () => {
  const header = document.createElement('h3');
  header.textContent = 'Todo App';
  return header;
};

export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');

  // form.insertAdjacentHTML(
  //   'beforeend',
  //   `
  //     <label class="form-group me-3 mb-0">
  //       <input type="text" class="form-control" placeholder="ввести задачу">
  //     </label>
  //   `,
  // );

  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');

  const input = document.createElement('input');
  input.classList.add('form-control');
  input.type = 'text';
  input.placeholder = 'ввести задачу';

  const createButtonsGroup = (params) => {
    const btns = params.map(({ className, type, text, disabled }) => {
      const button = document.createElement('button');
      button.className = className;
      button.type = type;
      button.textContent = text;
      button.disabled = disabled;
      return button;
    });

    return { btns };
  };

  const buttonsGroup = createButtonsGroup([
    {
      className: 'btn btn-primary me-3',
      type: 'submit',
      text: 'Сохранить',
      disabled: true,
    },
    {
      className: 'btn btn-warning',
      type: 'reset',
      text: 'Очистить',
    },
  ]);

  form.append(label, ...buttonsGroup.btns);
  label.append(input);
  // form.append(...buttonGroup.btns);

  return form;
};

export const createTable = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');

  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML(
    'beforeend',
    `
      <tr>
        <th>№</th>
        <th>Задача</th>
        <th>Статус</th>
        <th>Действия</th>
      </tr>
    `,
  );

  const tbody = document.createElement('tbody');
  table.tbody = tbody;

  tableWrapper.append(table);
  table.append(thead, tbody);

  return { tableWrapper, table };
};

export const createRow = (status, index, task) => {
  const tr = document.createElement('tr');
  if (status === 'Выполнена') {
    tr.classList.add('table-success');
  } else {
    tr.classList.add('table-light');
  }

  const tdNumber = document.createElement('td');
  tdNumber.textContent = index + 1;

  const tdTask = document.createElement('td');
  tdTask.textContent = task.name;
  if (status === 'Выполнена') tdTask.classList.add('text-decoration-line-through');

  const tdStatus = document.createElement('td');
  tdStatus.textContent = status;

  const tdButtons = document.createElement('td');

  const btnDel = document.createElement('button');
  btnDel.classList.add('btn', 'btn-danger');
  btnDel.textContent = 'Удалить';

  const btnComplete = document.createElement('button');
  btnComplete.classList.add('btn', 'btn-success');
  btnComplete.textContent = 'Завершить';

  tdButtons.append(btnDel, btnComplete);
  tr.append(tdNumber, tdTask, tdStatus, tdButtons);

  return tr;
};
