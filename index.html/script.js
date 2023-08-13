// Add a task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskElement = document.createElement('li');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
      `;
      taskList.appendChild(taskElement);
      taskInput.value = '';
    }
  }
  
  // Remove a task from the list
  function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskElement = button.parentElement;
    taskList.removeChild(taskElement);
  }
  