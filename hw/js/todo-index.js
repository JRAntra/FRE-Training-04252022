"use strict"
// all the data/attributes for each html node to render
const node = {

    idConcater: '-',

    main: {
        tag: "main",
        className: undefined,
        prefix: undefined,
        id: undefined,
        text: undefined
    },

    header: {
        tag: "section",
        className: "header",
        prefix: undefined,
        id: undefined,
        text: undefined
    },

    title: {
        tag: "h1",
        className: "title",
        prefix: undefined,
        id: undefined,
        text: "Vanilla JS ToDo App"
    },

    input: {
        container: {
            tag: "section",
            className: "container__input",
            prefix: "container",
            id: "input",
            text: undefined,
        },

        field: {
            tag: "input",
            className: "input__addItem",
            prefix: "input",
            id: "addItem",
            text: undefined,
            type: "text",
            placeholder: "Title..."
        },

        buttonAdd: {
            tag: "button",
            className: "btn__addItem",
            prefix: "btn",
            id: "addItem",
            text: "Add"
        },

        buttonSave: {
            tag: "button",
            className: "btn__saveText",
            prefix: "btn",
            id: "saveText",
            text: "Save"
        }
    },

    list: {
        container: {
            tag: "section",
            className: "container__list",
            prefix: "list",
            id: "container",
            text: undefined
        },

        item: {
            container: {
                tag: "section",
                className: "container__item",
                prefix: "item_container",
                id: undefined,
                text: undefined
            },

            no: {
                tag: "span",
                className: "seq-no",
                prefix: "item_seq",
                id: undefined,
                text: undefined
            },

            buttonDelete: {
                tag: "button",
                className: "btn-delete",
                prefix: "item_delete",
                id: undefined,
                text: "x"
            },

            completed: {
                tag: "input",
                className: "check-done",
                prefix: "item_check",
                id: undefined,
                text: undefined,
                type: "checkbox",
                checked: false
            },

            text: {
                tag: "input",
                className: "item_text",
                prefix: "item_text",
                id: undefined,
                text: undefined,
                type: "text",
            }
        }
    }
}

// VIEW
const view = ((node) => {

    // function to add a single DOM node and attach it to the parent (if defined)
    const addOneNode = (parentNode, childTag, childClass, childID, idPrefix = '', childText) => {
        const childNode = document.createElement(childTag);
        if (childClass) childNode.className = childClass;
        if (childID) childNode.id = `${idPrefix}${node.idConcater}${childID}`;
        if (parentNode) parentNode.appendChild(childNode);
        if (!childText) return childNode;
        // adding text into the childNode
        if (childTag === "input" || childTag === "textarea") {
            childNode.value = childText;
        } else childNode.innerText = childText;
        return childNode;
    };

    // function to add a chain of nodes (items in a list)
    const addMoreNodes = (parentNode, childTag, childClass, childIDPrefix, dataList) => {
        if (!dataList.length || !Array.isArray(dataList)) return;
        let counter = dataList.length;

        dataList.forEach((item) => {
            const listNode = addOneNode(undefined, childTag, childClass, item.id, childIDPrefix)
            addOneNode(listNode, node.list.item.no.tag, node.list.item.no.className, item.id, node.list.item.no.prefix, `${counter}`)// "div", "seq-no", counter, "seq", `${counter}`)
            // add delete button to childNode
            addOneNode(listNode, node.list.item.buttonDelete.tag, node.list.item.buttonDelete.className, item.id, node.list.item.buttonDelete.prefix, node.list.item.buttonDelete.text);
            // add completed check input to childNode
            const completed = addOneNode(listNode, node.list.item.completed.tag, node.list.item.completed.className, item.id, node.list.item.completed.prefix);
            completed.type = node.list.item.completed.type;
            if (item.completed == true) completed.checked = "checked";
            // add the item text to childNode
            addOneNode(listNode, node.list.item.text.tag, node.list.item.text.className, item.id, node.list.item.text.prefix, item.title);
            parentNode.appendChild(listNode);
            counter--;
        });
        return parentNode;
    };

    // function to render all the list nodes after chaining them
    const render = (containerNode, listNode) => {
        if (!listNode || !containerNode) return;
        // reset input.value to "" if there's any existing content
        document.getElementById(`${node.input.field.prefix}${node.idConcater}${node.input.field.id}`).value = "";

        const id = listNode.id;
        // reset display by removing all list nodes in the container node (with the same id) from client
        if (document.getElementById(id)) document.getElementById(id).remove();
        // if there is no list nodes being displayed, just append this -new- listNode;
        containerNode.appendChild(listNode);
        return containerNode;
    }
    return {addOneNode, addMoreNodes, render};

})(node);

// API
const api = (() => {

    const getAll = (url, path) => {
        return fetch(`${url}/${path}`)
        .then((response) => response.json())
    };

    const addOne = (newDocument) => {
        return fetch(`${url}/${path}`, {
            method: 'POST',
            body: JSON.stringify(newDocument),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json());
    };

    const editOne = (id, obj) => {
        return fetch(`${url}/${path}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json());
    };

    const deleteOne = (id) => {
        return fetch(`${url}/${path}/${id}`, {
            method: 'DELETE',
        })
    };

    return {
        getAll,
        addOne,
        editOne,
        deleteOne
    }
})();

// MODEL
const model = ((view, api, node) => {
    const {getAll, addOne, editOne, deleteOne} = api;
    class Item {
        constructor(title, id, completed = false, userId = 100) {
            // try align the following properties order the same with the seed data properties order
            this.userId = userId,
            this.id = id,
            this.title = title,
            this.completed = completed
        }
    }
    class State {

        #list = [];

        get list() {
            console.log(this.#list)
            return this.#list;
        }

        set list(newList) {
            this.#list = [...newList];
            // create a parent node to stick all the child nodes
            const listNode = view.addOneNode(undefined, node.list.container.tag, node.list.container.className, node.list.container.id, node.list.container.prefix)// "section", "section__list", "list", "section");
            // adding child nodes to listNode
            view.addMoreNodes(listNode, node.list.item.container.tag, node.list.item.container.className, node.list.item.container.prefix, this.#list)
            // grab container element to hook
            const mainNode = document.querySelector(node.main.tag);
            // render on client by sticking the listNode -parentNode- to mainNode
            view.render(mainNode, listNode);
        }
    }

    return {Item, State, getAll, addOne, editOne, deleteOne};

})(view, api, node);


// CONTROLLER
const controller = ((model, view, node) => {

    const {Item, State} = model;
    const state = new State();

    const setEditable = (prefix, id, event) => {
        const textNode = event.target;
        const parentNode = event.target.parentNode;
        const inputNode = view.addOneNode(undefined, "input", textNode.className, id, prefix, textNode.innerText);
        // parentNode.replaceChild(inputNode, textNode);
        // inputNode.value = textNode.innerText
        textNode.addEventListener("keyup", (e) => {
            if (e.target.value.trim() === '' || e.key !== "Enter") return;
            const update = {title: e.target.value};
            model.editOne(id, update)
            .then((res) => {
                state.list = state.list.map((doc) => {
                    if (doc.id === id) {
                        doc.title = update.title;
                    }
                })
            })
        })
    }

    const toggleItem = (id, newCheckBoxValue) => {
        const update = {completed: newCheckBoxValue};
        model.editOne(id, update)
        .then((res) => {
            state.list = state.list.map((doc) => {
                if (doc.id === id) {
                    doc.completed = newCheckBoxValue;
                }
            })
        })
    }

    const deleteItem = (id) => {
        state.list = state.list.filter((doc) => doc.id !== id);
        model.deleteOne(id);
    }

    const listUpdateListener = () => {
        const listNode = document.getElementById(`${node.list.container.prefix}${node.idConcater}${node.list.container.id}`);
        listNode.addEventListener("click", (event) => {
            const [prefix, id] = event.target.id.split(node.idConcater);
            if (prefix === node.list.item.buttonDelete.prefix) deleteItem(+id);
            else if (prefix === node.list.item.completed.prefix) toggleItem(+id, event.target.checked);
            else if (prefix === node.list.item.text.prefix) setEditable(prefix, +id, event);
        });
        return listNode;
    }

    const addItem = (event) => {
        const inputText = document.getElementById(`${node.input.field.prefix}${node.idConcater}${node.input.field.id}`).value
            , docID = state.list.length ? state.list[state.list.length - 1].id + 1 : 1;
        if (!inputText.trim().length) return;
        // create new instance of item
        const item = new Item(inputText, docID);
        // persist the addition to backend, then update the state.list for a re-render
        model.addOne(item).then((item) => {
            state.list = [...state.list, item]
        });
        inputText.target.value = "";
    }

    const addItemListener = () => {
        const btn = document.getElementById(`${node.input.buttonAdd.prefix}${node.idConcater}${node.input.buttonAdd.id}`);
        btn.addEventListener("click", addItem);
        return btn;
    }

    // grab data from backend and assign to state, embed event listeners
    const init = async (url, path, id) => state.list = await model.getAll(url, path, id);

    const exec = async (url, path, id) => {
        await init(url, path, id);
        addItemListener();
        // without async await, the chain of items not formed yet for listeners to work properly
        listUpdateListener();
    }

    return {exec};
})(model, view, node);


// Static Lay-out
const main = document.querySelector(node.main.tag)
    , header = view.addOneNode(main, node.header.tag, node.header.className)
        , title = view.addOneNode(header, node.title.tag, node.title.className, node.title.id, node.title.prefix, node.title.text)
        , inputContainer = view.addOneNode(header, node.input.container.tag, node.input.container.className, node.input.container.id, node.input.container.prefix)
            , inputField = view.addOneNode(inputContainer, node.input.field.tag, node.input.field.className, node.input.field.id, node.input.field.prefix).placeholder = node.input.field.placeholder
            , addButton = view.addOneNode(inputContainer, node.input.buttonAdd.tag, node.input.buttonAdd.className, node.input.buttonAdd.id, node.input.buttonAdd.prefix, node.input.buttonAdd.text)
    // this listSection must exist and hooked to main so that callback can grab it and add event listener
    , listContainer = view.addOneNode(main, node.list.container.tag, node.list.container.className, node.list.container.id, node.list.container.prefix);


// trigger
const url = "http://localhost:3000" // "https://jsonplaceholder.typicode.com"
    , path = "todos";


controller.exec(url, path);
