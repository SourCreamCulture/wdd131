let tasks = [];

function renderTasks(tasks) {
  // get the list element from the DOM
  const todoList = document.querySelector('#todoList');
  // loop through the tasks array and transform each task into HTML
  todoList.innerHTML = tasks.map(task => `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>
  `).join('');
}

function newTask() {
  // get the value entered into the #todo input
  const todoInput = document.querySelector('#todo');
  const taskDetail = todoInput.value.trim();
  
  if (taskDetail) {
    // add it to our tasks array
    tasks.push({
      detail: taskDetail,
      completed: false
    });
    
    // clear the input
    todoInput.value = '';
    
    // render out the list
    renderTasks(tasks);
  }
}

function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );

  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  console.log(event.currentTarget);
  
  // Get the closest li element to the clicked icon
  const taskElement = event.target.closest('li');
  
  // Check which function was clicked using the data-function attribute
  if (event.target.dataset.function === 'delete') {
    removeTask(taskElement);
  } else if (event.target.dataset.function === 'complete') {
    completeTask(taskElement);
  }
}

// Add event listeners
document.querySelector('#submitTask').addEventListener('click', newTask);
document.querySelector('#todoList').addEventListener('click', manageTasks); 