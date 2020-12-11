const container = document.querySelector('.container');
const add = document.querySelector('.add');
let inputValue = document.querySelector('.input');
let todos = [];//Store to do list
class item {
    constructor(name) {
        this.createItem(name);
    }

    createItem(name) {
        let itemBox, input, edit, remove;
        //Create div tag
        itemBox = document.createElement('div');
        itemBox.classList.add('item');

        //Create input
        input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        //Create button edit
        edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "EDIT";
        edit.addEventListener('click', () => this.edit(input, name));

        //Create button remove
        remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "REMOVE";
        remove.addEventListener('click', () => this.remove(itemBox, name));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name) {
        if (input.disabled == true) {
            input.disabled = !input.disabled;
        } else {
            let indexof;
            input.disabled = !input.disabled;
            indexof = todos.indexOf(name);
            todos[indexof] = input.value;
        }
    }

    remove(itemBox, name) {
        let index;
        itemBox.parentNode.removeChild(itemBox);
        index = todos.indexOf(name);
        todos.splice(index, 1);
    }
}

add.addEventListener('click', handleAddItem);

function handleAddItem() {
    if (inputValue.value !== '') {
        new item(inputValue.value);
        todos.push(inputValue.value);
        inputValue.value = '';
    }
}


for (let i = 0; i < todos.length; i++) {
    new item(todos[v]);
}

new item("playing football");