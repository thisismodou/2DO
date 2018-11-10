let form = document.querySelector('#addNewTodo');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

function createListItem(item) {
    if (input.value.length > 0) {
        let listItem = `<li>
        <span class="checkbox"></span>
        <span class="todo-text">${input.value}</span>
        <span onclick="deleteListItem(this)" class="delete"></span>
    </li>`;

        ul.insertAdjacentHTML('afterbegin', listItem);

        input.value = '';
    } else {
        showErrorMessage();
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createListItem(input.value);
});

function deleteListItem(item) {
    item.parentElement.remove();
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

function completeTodo(e) {
    let listItem = e.target.parentElement;
    let checkbox = e.target;

    listItem.classList.toggle('list-item-done');
    checkbox.classList.toggle('checkbox-done');
}

ul.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'checkbox') {
        completeTodo(e);
    }
});