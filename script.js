'use strict';

{
  const createContainer = () => {};

  const createHeader = () => {
    const header = document.createElement('h3');
    header.textContent = 'Todo App';
    return header;
  };

  const createForm = () => {
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

  const createTable = () => {
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

  const renderToDo = (app) => {
    const container = document.querySelector('.app-container');
    container.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

    const header = createHeader();
    const form = createForm();
    // const table = createTable();

    const { tableWrapper, table } = createTable();
    app.append(header, form, tableWrapper);

    return {
      list: table.tbody,
      form,
    };
  };

  const createRow = ({ title, status }, index) => {
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

  const renderTask = (elem, data) => {
    const allRow = data.map((elem, index) => createRow(elem, index));

    elem.append(...allRow);
    return allRow;
  };

  const getStorage = (key) => {
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  };

  const setStorage = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
  };

  const addTaskData = (key, task) => {
    const data = getStorage(key);
    data.push(task);
    console.log('data: ', data);
    setStorage(key, data);
  };

  const removeStorage = (key, titleTask) => {
    const data = getStorage(key);
    const dataNew = data.filter((item) => item.title !== titleTask);
    setStorage(key, dataNew);
  };

  const addTaskPage = (task, list, index) => {
    list.append(createRow(task, index));
  };

  //////////////////!
  const cellNumber = (list) => {
    const listNum = list.children;

    for (let i = 0; i < listNum.length; i++) {
      listNum[i].children[0].textContent = i + 1;
    }
  };
  //////////////////!

  const delTaskPage = (data, list, key) => {
    list.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('.btn-danger')) {
        const className = target.closest('.table-success') ? '.table-success' : '.table-light';
        for (let i = 0; i < data.length; i++) {
          if (target.closest(className).children[1].textContent === data[i].title) {
            data.splice(i, 1);
          }
        }
        target.closest(className).remove();
        removeStorage(key, target.closest(className).children[1].textContent);
        cellNumber(list);
      }
    });
  };

  const resetControl = (button, form) => {
    const btnReset = document.querySelector('.btn-warning');

    btnReset.addEventListener('click', (e) => {
      e.preventDefault();
      form.reset();
      button.disabled = true;
    });
  };

  const completeTask = (list, name) => {
    list.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('.btn-success')) {
        const dataNew = getStorage(name);

        for (let i = 0; i < dataNew.length; i++) {
          if (target.closest('.table-light').children[1].textContent === dataNew[i].title) {
            target.closest('.table-light').children[1].classList.add('text-decoration-line-through');
            target.closest('.table-light').children[2].textContent = 'Выполнена';
            dataNew[i].status = 'Выполнена';
            target.closest('.table-light').classList.add('table-success');
            target.closest('.table-light').classList.toggle('table-light');
            setStorage(name, dataNew);
          }
        }
      }
    });
  };

  const formControl = (form, list, index, title, table) => {
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

    resetControl(button, form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const newTask = Object.fromEntries(formData);
      newTask.index = index + 1;
      newTask.title = input.value;
      newTask.status = 'В процессе';
      console.log('newTask: ', newTask);

      // addList(title, table);
      addTaskPage(newTask, list, index, title);
      addTaskData(newTask, title);
      button.disabled = true;
      // renderTask(title);

      form.reset();
      debugger;
    });
  };

  const init = (selectorApp, data) => {
    const app = document.querySelector(selectorApp);

    data = getStorage();

    const { list, title, form } = renderToDo(app);
    formControl(form, list, title);
    renderTask(list, data);
    completeTask(list);
    delTaskPage(data, list);
  };

  window.todoInit = init;
}
