let form = document.querySelector('#addNewTodo');
let input = document.querySelector('input');
// let list = document.querySelectorAll('li');
let ul = document.querySelector('ul');
// let allTodoItems = [];

// #region CREATE AND APPEND NEW ELEMENT TO LIST (UL) - BEGIN
function createNewElement() {
    if (input.value.length > 0) {
        let li = document.createElement('li');
        let checkbox = document.createElement('span');
        let todoText = document.createElement('span');
        let removeBtn = document.createElement('span');

        checkbox.className = 'checkbox';
        todoText.className = 'todo-text';
        removeBtn.className = 'delete';

        // allTodoItems.push(input.value);

        todoText.textContent = input.value;
        input.value = '';

        li.appendChild(checkbox);
        li.appendChild(todoText);
        li.appendChild(removeBtn);
        ul.insertBefore(li, ul.firstElementChild);
    } else {
        showErrorMessage();
    }
}

// Show Error Message if user submits while input is empty
function showErrorMessage() {
    let errorMessage = document.querySelector('#error-message');
    errorMessage.style.display = 'block';

    // Hide Error Message when user types something
    input.addEventListener('input', () => {
        if (input.value.length > 0) {
            errorMessage.style.display = 'none';
        }
    })
}

form.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        createNewElement();
    }
});
// #endregion CREATE AND APPEND NEW ELEMENT TO LIST (UL) - END

// #region COMPLETE AND/OR DELETE ELEMENT - BEGIN
// COMPLETE ITEM
function completeTodo(e) {
    let listItem = e.target.parentElement;
    let checkbox = e.target;
    let text = e.target.nextElementSibling;
    let trash = e.target.nextElementSibling.nextElementSibling;

    if (listItem.tagName === 'LI') {
        listItem.classList.toggle('list-item-done');
        checkbox.classList.toggle('checkbox-done');
        text.classList.toggle('todo-text-done');
        trash.classList.toggle('delete-done');
    }
}

// DELETE ITEM
function deleteElement(e) {
    let li = e.target.parentElement;
    ul.removeChild(li);
}

ul.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'delete') {
        deleteElement(e);
    }
    if (e.target.className === 'checkbox') {
        completeTodo(e);
    }
});
// #endregion COMPLETE AND/OR DELETE ELEMENT - END