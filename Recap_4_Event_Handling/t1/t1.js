// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const ul = document.querySelector('ul');

// Creating the items in the todoList array one at a time.

for (let todo of todoList) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const button = document.createElement('button');

  button.innerText = 'X';

  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todo.id}`);

  if (todo.completed) {
    input.setAttribute('checked', true);
  }

  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.innerText = todo.task;

  li.insertAdjacentElement('beforeend', input);
  li.insertAdjacentElement('beforeend', label);
  li.insertAdjacentElement('beforeend', button);
  ul.insertAdjacentElement('beforeend', li);

  input.addEventListener('change', event => {
    todo.completed = event.target.checked;
    console.log('todoList', todoList);
  });

  button.addEventListener('click', event => {
    const index = todoList.findIndex(item => item?.id === todo.id);

    if (index > -1) {
      todoList.splice(index, 1);
    }

    console.log('index', index);
    console.log('todoList', todoList);
    ul.removeChild(li);
  });
}

const addButton = document.querySelector('button.add-btn');
const dialog = document.querySelector('dialog');
const form = dialog.querySelector('form');

addButton.addEventListener('click', () => {
  dialog.show();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const newTodoTask = form.querySelector('input').value;

  const newTodoObject = {
    id: todoList[todoList.length - 1].id + 1,
    task: newTodoTask,
    completed: false,
  };

  todoList.push(newTodoObject);

  // this part is to creat a new item adding into the list as the new todo.
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const button = document.createElement('button');

  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${newTodoObject.id}`);

  label.htmlFor = `todo-${newTodoObject.id}`;
  label.innerText = newTodoObject.task;

  button.innerText = 'X';

  li.insertAdjacentElement('beforeend', input);
  li.insertAdjacentElement('beforeend', label);
  li.insertAdjacentElement('beforeend', button);
  ul.insertAdjacentElement('beforeend', li);

  input.addEventListener('change', event => {
    newTodoObject.completed = event.target.checked;
    console.log('todoList', todoList);
  });

  button.addEventListener('click', event => {
    const index = todoList.findIndex(
      item => item?.id === newTodoObject.id
    );

    if (index > -1) {
      todoList.splice(index, 1);
    }

    console.log('index', index);
    console.log('todoList', todoList);
    ul.removeChild(li);
  });

  form.reset();
  dialog.close();

  console.log('todoList', todoList);
});