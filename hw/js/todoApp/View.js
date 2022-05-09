'use strict'

const View = (node) => {

    // function to add a single DOM node and attach it to the parent (if defined)
    const addOneNode = (parentNode, childTag, childClass, childID, idPrefix = "", childText) => {
        const childNode = document.createElement(childTag);
        if (childClass) childNode.className = childClass;
        if (childID) childNode.id = `${idPrefix}${node.idConcater}${childID}`;
        if (parentNode) parentNode.appendChild(childNode);
        if (!childText) return childNode;

        if (childTag === "input" || childTag === "textarea") {
            childNode.value = childText;
        } else childNode.innerText = childText;
        return childNode;
    };

    // function to add a chain of nodes (items in a list)
    const addMoreNodes = (parentNode, childTag, childClass, childIDPrefix, dataList) => {

        if (!dataList.length || !Array.isArray(dataList)) return;
        // this counter is to populate the sequence no. in the rendered list in REVERSE order
        let counter = dataList.length;

        dataList.forEach((doc) => {
            // create node to contain all the elements to render in each item
            const itemNode = addOneNode(undefined, childTag, childClass, item.id, childIDPrefix)

            const no = node.list.item.no;
            addOneNode(itemNode, no.tag, no.className, doc.id, no.prefix, `${counter}`);

            const buttonDelete = node.list.item.buttonDelete;
            addOneNode(itemNode, buttonDelete.tag, buttonDelete.className, doc.id, buttonDelete.prefix, buttonDelete.text);

            const completed = node.list.item.completed;
            const chkBox = addOneNode(itemNode, completed.tag, completed.className, doc.id, completed.prefix);
            chkBox.type = completed.type;
            if (item.completed == true) chkBox.checked = "checked";

            const text = node.list.item.text;
            addOneNode(itemNode, text.tag, text.className, doc.id, text.prefix, doc.title);

            parentNode.appendChild(itemNode);
            counter--;
        });
        return parentNode;
    };

    // function to render all the list nodes after chaining them
    const render = (containerNode, listNode) => {
        if (!listNode || !containerNode) return;
        const field = node.input.field;
        // reset input valut to "" if there's any existing content
        document.getElementById(`${field.prefix}${node.idConcater}${field.id}`).value = "";

        const id = listNode.id;
        // reset display by removing all list nodes in the container node (with the same id) from client
        if (document.getElementById(id)) document.getElementById(id).remove();
        // append the new listNode
        containerNode.appendChild(listNode);
        return containerNode;
    }

    return {addOneNode, addMoreNodes, render};
}
