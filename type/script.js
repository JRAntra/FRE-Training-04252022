// Add Variables
var addinput = document.querySelector('.add__input');
var addevent = document.querySelector('.add__icon');
var wait = document.querySelector('.wait');
var done = document.querySelector('.done');

// init
addDoneItem('Done Task Example');
addWaititem('Pending Task Example');

function getToDos() {
  fetch('http://localhost:3000/todos')
    .then((response) => response.json())
    .then((data) => {
      data.forEach(function (elem) {
        if (elem.isCompleted === false) {
          addWaititem(elem.content);
        } else {
          addDoneItem(elem.content);
        }
      });
    });
}

// getToDos();

// For Pending Tasks Div
addevent.addEventListener('click', function () {
  var addcontent = addinput.value.trim();
  addWaititem(addcontent);
  addinput.value = '';
});

// Pending ToDo Lists
function addWaititem(content) {
  // Add ToDos
  var waitItem = document.createElement('div');
  waitItem.className = 'wait__item';
  waitItem.innerHTML = `
  <div class="wait__item__text">${content}</div>
  <div class="wait__item__icons">
    <div class="wait__item__icons__trash"><i class="fas fa-trash-alt"></i></div>
    <div class="wait__item__icons__done"><i class="far fa-check-circle"></i></div>
  </div>`;
  wait.appendChild(waitItem);

  // Delete and Check ToDos
  var toDoList = document.querySelector('.wait');
  toDoList.onclick = function (event) {
    // Delete ToDos
    if (event.target.className === 'fas fa-trash-alt') {
      event.target.parentNode.parentNode.parentNode.remove();
    }
    // Check ToDos
    if (event.target.className === 'far fa-check-circle') {
      addDoneItem(event.target.parentNode.parentNode.parentNode.innerText);
      event.target.parentNode.parentNode.parentNode.remove();
    }
  };
}

// For Compeleted Tasks Div
function addDoneItem(doneContent) {
  // Add ToDos
  var doneItem = document.createElement('div');
  doneItem.className = 'done__item';
  doneItem.innerHTML = `
  <div class="done__item__icons">
    <div class="done__item__icons__done"><i class="fas fa-check-circle"></i></div></div>
  </div>
  <div class="done__item__text">${doneContent}</div>
  <div class="done__item__icons">
    <div class="done__item__icons__trash"><i class="fas fa-trash-alt"></i></div>
  </div>`;
  done.appendChild(doneItem);

  // Delete and Uncheck ToDos
  var toDoList = document.querySelector('.done');
  toDoList.onclick = function (event) {
    // Delete ToDos
    if (event.target.className === 'fas fa-trash-alt') {
      event.target.parentNode.parentNode.parentNode.remove();
    }
    // Uncheck ToDos
    if (event.target.className === 'fas fa-check-circle') {
      addWaititem(event.target.parentNode.parentNode.parentNode.innerText);
      event.target.parentNode.parentNode.parentNode.remove();
    }
  };
}

// Still need to work on update the localStorage using JSON.stringify
