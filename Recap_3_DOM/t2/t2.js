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

const list = document.querySelector('ul')

for (const item of todoList) {
  
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');

  checkbox.type = 'checkbox';
  checkbox.id = 'todo-${item.id}';
  checkbox.checked = item.completed;

  label.htmlFor = 'todo-${item.id}';
  label.innerText = item.task;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  list.appendChild(listItem);
}