export const createHeader = () => {
  const header = document.createElement('h3');
  header.textContent = 'Todo App';
  return header;
};

export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');

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

  return {
    tableWrapper,
    table,
  };
};

export const createRow = (task) => {
  const tr = document.createElement('tr');

  const tdId = document.createElement('td');
  tdId.textContent = document.querySelector('tbody').childElementCount + 1;

  const tdName = document.createElement('td');
  tdName.textContent = task.name;

  const tdStatus = document.createElement('td');

  const tdButtons = document.createElement('td');

  const btnDel = document.createElement('button');
  btnDel.classList.add('btn', 'btn-danger');
  btnDel.textContent = 'Удалить';

  const btnComplete = document.createElement('button');
  btnComplete.classList.add('btn', 'btn-success');
  btnComplete.textContent = 'Завершить';

  if (task.status === true) {
    tdStatus.textContent = 'Выполнена';
    tr.classList.add('table-success');
    tdName.classList.add('text-decoration-line-through');
  } else {
    tr.classList.add('table-light');
    tdStatus.textContent = 'В процессе';
  }

  tdButtons.append(btnDel, btnComplete);
  tr.append(tdId, tdName, tdStatus, tdButtons);

  return tr;
};
