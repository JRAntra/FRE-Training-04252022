"use strict"
// ----------- all the data/attributes for each html node to render -----------
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

        subcontainerA: {
            tag: "section",
            className: "container__sublist",
            prefix: "sublist",
            id: "containerA",
            text: undefined
        },

        subcontainerB: {
            tag: "section",
            className: "container__sublist",
            prefix: "sublist",
            id: "containerB",
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

            buttonEdit: {
                tag: "button",
                className: "btn-edit",
                prefix: "item_edit",
                id: undefined,
                text: "🖍"
            },

            buttonDelete: {
                tag: "button",
                className: "btn-delete",
                prefix: "item_delete",
                id: undefined,
                text: " X "
            },

            buttonDone: {
                tag: "button",
                className: "btn-done",
                prefix: "item_done",
                id: undefined,
                text: "✅"
            },

            buttonTodo: {
                tag: "button",
                className: "btn-todo",
                prefix: "item_todo",
                id: undefined,
                text: "🔙"
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

const endPoint = {
    url: "http://localhost:3000",
    path: "todos"
}


// ------------------------------------- VIEW ------------------------------------
// view: variable to store functions returned from calling an IIFE anonymous "Class"
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

    // function to add a chain of nodes (items in a list Todo, NOT done)
    const addTodoNodes = (parentNode, childTag, childClass, childIDPrefix, dataList) => {
        if (!dataList.length || !Array.isArray(dataList)) return;

        dataList.forEach((item) => {
            const listNode = addOneNode(undefined, childTag, childClass, item.id, childIDPrefix);
            // add the item text to childNode
            addOneNode(listNode, node.list.item.text.tag, node.list.item.text.className, item.id, node.list.item.text.prefix, item.content);
            // add edit button to childNode
            addOneNode(listNode, node.list.item.buttonEdit.tag, node.list.item.buttonEdit.className, item.id, node.list.item.buttonEdit.prefix, node.list.item.buttonEdit.text);
            // add delete button to childNode
            addOneNode(listNode, node.list.item.buttonDelete.tag, node.list.item.buttonDelete.className, item.id, node.list.item.buttonDelete.prefix, node.list.item.buttonDelete.text);
            // add done button to childNode
            addOneNode(listNode, node.list.item.buttonDone.tag, node.list.item.buttonDone.className, item.id, node.list.item.buttonDone.prefix, node.list.item.buttonDone.text);
            parentNode.appendChild(listNode);
        });
        return parentNode;
    };

    // function to add a chain of nodes (items in a list that is DONE)
    const addDoneNodes = (parentNode, childTag, childClass, childIDPrefix, dataList) => {
        if (!dataList.length || !Array.isArray(dataList)) return;

        dataList.forEach((item) => {
            const listNode = addOneNode(undefined, childTag, childClass, item.id, childIDPrefix);
            // add todo button to childNode
            addOneNode(listNode, node.list.item.buttonTodo.tag, node.list.item.buttonTodo.className, item.id, node.list.item.buttonTodo.prefix, node.list.item.buttonTodo.text);
            // add the item text to childNode
            addOneNode(listNode, node.list.item.text.tag, node.list.item.text.className, item.id, node.list.item.text.prefix, item.content);
            // add edit button to childNode
            addOneNode(listNode, node.list.item.buttonEdit.tag, node.list.item.buttonEdit.className, item.id, node.list.item.buttonEdit.prefix, node.list.item.buttonEdit.text);
            // add delete button to childNode
            addOneNode(listNode, node.list.item.buttonDelete.tag, node.list.item.buttonDelete.className, item.id, node.list.item.buttonDelete.prefix, node.list.item.buttonDelete.text);
            parentNode.appendChild(listNode);
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
    return {addOneNode, addTodoNodes, addDoneNodes, render};

})(node)

// ------------------------------------- API ---------------------------------------
// api: variable to store functioons returned from calling an anonymous IIFE "Class"
const api = ((endPoint) => {
    const {url, path} = endPoint;

    const getAll = async (url, path) => {
        const result = await fetch(`${url}/${path}`)
        .then((response) => response.json())
        return result;
    };

    const addOne = async (newDocument) => {
        const result = await fetch(`${url}/${path}`, {
            method: 'POST',
            body: JSON.stringify(newDocument),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json());
        return result; // is the new doc being added
    };

    const editOne = async (id, obj) => {
        const result = await fetch(`${url}/${path}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json());
        return result;
    };

    const deleteOne = async (id) => {
        const result = await fetch(`${url}/${path}/${id}`, {
            method: 'DELETE',
        })
        console.log(result.status)
        return result;
    };

    return {
        getAll,
        addOne,
        editOne,
        deleteOne
    }
})(endPoint);


// ------------------------------------- MODEL ---------------------------------------
// model: variable to store functioons returned from calling an anonymous IIFE "Class"
const model = ((view, api, node) => {
    const {getAll, addOne, editOne, deleteOne} = api;
    class Item {
        constructor(content, id = 0, isCompleted = false) {
            this.content = content,
            this.isCompleted = isCompleted,
            this.id = id
        }
    }
    class State {

        #list = [];

        get list() {
            console.log("list", this.#list)
            return this.#list;
        }

        set list(newList) {
            this.#list = [...newList];

            // create a parent node to stick all the child nodes in sublist todo
            const listNodeA = view.addOneNode(undefined, node.list.subcontainerA.tag, node.list.subcontainerA.className, node.list.subcontainerA.id, node.list.subcontainerA.prefix);
            const listA = this.#list.filter((item) => item.isCompleted === false);
            console.log("todo", listA)
            // adding child nodes to listNode
            view.addTodoNodes(listNodeA, node.list.item.container.tag, node.list.item.container.className, node.list.item.container.prefix, listA);

            // create a parent node to stick all the child nodes in sublist done
            const listNodeB = view.addOneNode(undefined, node.list.subcontainerB.tag, node.list.subcontainerB.className, node.list.subcontainerB.id, node.list.subcontainerB.prefix);
            const listB = this.#list.filter((item) => item.isCompleted === true);
            // adding child nodes to listNode
            view.addDoneNodes(listNodeB, node.list.item.container.tag, node.list.item.container.className, node.list.item.container.prefix, listB);
            console.log("done", listB)
            // grab container element to hook
            const listContainer = document.getElementById(`${node.list.container.prefix}${node.idConcater}${node.list.container.id}`);
            // render on client by sticking the listNode -parentNode- to mainNode
            view.render(listContainer, listNodeA);
            view.render(listContainer, listNodeB);
        }
    }

    return {Item, State, getAll, addOne, editOne, deleteOne};

})(view, api, node);


// ------------------------------------- CONTROLLER ------------------------------------------
const controller = ((model, view, node, endPoint) => {

    const {url, path} = endPoint;
    const {Item, State} = model;
    const state = new State();

    const editItemText = (prefix, id, event) => {
        console.log("edit", id)
    }

    const done = async (id) => {
        const result = await model.editOne(id, {isCompleted: true});
        if (result) state.list = await model.getAll(url, path);
        else state.list = [...state.list];
        return result;
    }

    const undone = async (id) => {
        const result = await model.editOne(id, {isCompleted: false});
        if (result) state.list = await model.getAll(url, path);
        else state.list = [...state.list];
        return result;
    }

    const deleteItem = async (id) => {
        const result = await model.deleteOne(id);
        if (result) state.list = state.list.filter((doc) => doc.id !== id);
        // after deleting, refresh listener to the list container
        else state.list = [...state.list];
        return result;
    }

    const listUpdateListener = () => {
        const listNode = document.getElementById(`${node.list.container.prefix}${node.idConcater}${node.list.container.id}`);
        listNode.addEventListener("click", (event) => {
            console.log(310, event.target.id)
            const [prefix, id] = event.target.id.split(node.idConcater);
            if (prefix === node.list.item.buttonDelete.prefix) deleteItem(+id);
            else if (prefix === node.list.item.buttonDone.prefix) done(+id);
            else if (prefix === node.list.item.buttonTodo.prefix) undone(+id);
            else if (prefix === node.list.item.buttonEdit.prefix) editItemText(prefix, +id, event);
        });
        return listNode;
    }

    const addItem = async (event) => {
        const inputField = document.getElementById(`${node.input.field.prefix}${node.idConcater}${node.input.field.id}`);
        // create id for the new item/document by checking the id from doc at tail of the list, if list empty start with 1
        const docID = state.list.length ? state.list[state.list.length - 1].id + 1 : 1
        const inputText = inputField.value;
        if (!inputText.trim().length) return;
        // create new instance of item
        const newItem = new Item(inputText, docID);
        inputField.value = "";
        // persist the addition to backend, then update the state.list for a re-render
        const addedItem = await model.addOne(newItem);
        state.list = [...state.list, addedItem];
        return addedItem;
    }

    // function to add event listener into the input adding button
    const addItemListener = () => {
        const btn = document.getElementById(`${node.input.buttonAdd.prefix}${node.idConcater}${node.input.buttonAdd.id}`);
        btn.addEventListener("click", addItem);
        return btn;
    }

    // function to grab all data from backend, populate the list and trigger DOM rendering
    const init = async () => {
        const {url, path} = endPoint;
        const list = await model.getAll(url, path);
        state.list = [...list];
        return state.list;
    }

    // function to fire up the initialization for grabbing data and DOM rendering, also applying event listeners
    async function exec() {
        await init();
        addItemListener();
        listUpdateListener();
    }

    return {exec}
})(model, view, node, endPoint);


// -------------------------------- STATIC LAYOUT ---------------------------------------
// Block below depends on the user pre-defined node object, also view object's functions.
const main = document.querySelector(node.main.tag)
    , header = view.addOneNode(main, node.header.tag, node.header.className)
        , title = view.addOneNode(header, node.title.tag, node.title.className, node.title.id, node.title.prefix, node.title.text)
        , inputContainer = view.addOneNode(header, node.input.container.tag, node.input.container.className, node.input.container.id, node.input.container.prefix)
            , inputField = view.addOneNode(inputContainer, node.input.field.tag, node.input.field.className, node.input.field.id, node.input.field.prefix).placeholder = node.input.field.placeholder
            , addButton = view.addOneNode(inputContainer, node.input.buttonAdd.tag, node.input.buttonAdd.className, node.input.buttonAdd.id, node.input.buttonAdd.prefix, node.input.buttonAdd.text)
    , listContainer = view.addOneNode(main, node.list.container.tag, node.list.container.className, node.list.container.id, node.list.container.prefix)
        , subListContainerA = view.addOneNode(listContainer, node.list.subcontainerA.tag, node.list.subcontainerA.className, node.list.subcontainerA.id, node.list.subcontainerA.prefix)
        , subListContainerB = view.addOneNode(listContainer, node.list.subcontainerB.tag, node.list.subcontainerB.className, node.list.subcontainerB.id, node.list.subcontainerB.prefix)


// ----------------------------------- TRIGGER -----------------------------------------
controller.exec();
