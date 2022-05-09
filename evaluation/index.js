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
        containerA: {
            tag: "section",
            className: "container__list",
            prefix: "list",
            id: "containerA",
            text: undefined
        },

        containerB: {
            tag: "section",
            className: "container__list",
            prefix: "list",
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
                text: "Edit"
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
                text: "Done"
            },

            buttonTodo: {
                tag: "button",
                className: "btn-todo",
                prefix: "item_todo",
                id: undefined,
                text: "Todo"
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

const url = "http://localhost:3000";
const path = "todos";


// ------------------------------------- view ------------------------------------
// view is a variable to contain all the functions returned from calling an IIFE anonymous "Class"
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
            addOneNode(listNode, node.list.item.text.tag, node.list.item.text.className, item.id, node.list.item.text.prefix, item.title);
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
            addOneNode(listNode, node.list.item.text.tag, node.list.item.text.className, item.id, node.list.item.text.prefix, item.title);
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
