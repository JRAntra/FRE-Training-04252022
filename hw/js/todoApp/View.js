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


}
