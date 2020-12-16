function buttonComponent(options) {
    const defaultOptions = {
        className: "btn",
        onClick: function () {
        }
    };
    const {className, text, onClick} = {...defaultOptions, ...options};
    const buttonElement = document.createElement("button");

    buttonElement.classList.add(className);
    buttonElement.innerText = text;
    buttonElement.addEventListener("click", function () {
        onClick();
    });

    return buttonElement;
}

function listComponent({text, onDelete, onEdit}) {
    const listElement = document.createElement("div");

    const buttonDelete = buttonComponent({
        text: "Delete",
        onClick: function () {
            onDelete();
        }
    });

    const buttonEdit = buttonComponent({
        text: "Edit",
        onClick: function () {
            onEdit();
        }
    });

    listElement.classList.add("list");

    listElement.innerText = text;

    listElement.appendChild(buttonDelete);
    listElement.appendChild(buttonEdit);

    return listElement;
}

const appElement = document.getElementById("app");

const todolistComponent1 = listComponent({
    text: "task 1",
    onDelete: function () {
        console.log("delete 1");
    },
    onEdit: function () {
        console.log("edit 1");
    }
});

const todolistComponent2 = listComponent({
    text: "task 2",
    onDelete: function () {
        console.log("delete 2");
    },
    onEdit: function () {
        console.log("edit 2");
    }
});

const inputComponent = document.createElement("input");
inputComponent.setAttribute("id", "input");
const addButtonComponent = buttonComponent({
    text: "Add",
    onClick: function () {
        let inputElement = document.getElementById("input");
        const todolistComponent = listComponent({
            text: inputElement.value,
            onDelete: function () {
                console.log("delete");
            },
            onEdit: function () {
                console.log("edit");
            }
        });
        appElement.appendChild(todolistComponent);
    }
});

appElement.appendChild(inputComponent);
appElement.appendChild(addButtonComponent);
appElement.appendChild(todolistComponent1);
appElement.appendChild(todolistComponent2);
