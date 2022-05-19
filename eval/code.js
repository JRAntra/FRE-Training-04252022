const idList = new Set();

// All about initial GET
function getJSON() {
    const url = 'http://localhost:3000/todos';
    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest();
        req.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(req.response);
            }
            else {
                reject("error");
            }
        };
        req.open('GET', url);
        req.send();
    });
}
async function toStart() {
    let arr = await getJSON();
    arr = JSON.parse(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isCompleted) {
            addCompleted(arr[i].content, arr[i].id);
            idList.add(arr[i].id);
        }
        else {
            addPending(arr[i].content, arr[i].id);
            idList.add(arr[i].id);
        }
    }
}
toStart();

// Add pending visual
function addPending(str, num) {
    // create a li and add string into li
    const list = document.getElementById("pending");
    let li = document.createElement("LI");
    let span = document.createElement("SPAN");
    let text = document.createTextNode(str);
    span.appendChild(text);
    li.appendChild(span);

    // add id into li
    let id = document.createElement("SPAN");
    let idText = document.createTextNode(num);
    id.className = "idHide";
    id.appendChild(idText);
    li.appendChild(id);

    // create all buttons and add it into li
    let button1 = document.createElement("BUTTON");
    let button2 = document.createElement("BUTTON");
    button1.onclick = deleteItem;
    button1.style.float = "right";
    button1.innerHTML = "<i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>";
    // "<svg focusable=\"false\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" data-testid=\"DeleteIcon\" aria-label=\"fontSize small\"><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2 - .9 2 - 2V7H6v12zM19 4h - 3.5l - 1 - 1h - 5l - 1 1H5v2h14V4z\"></path></svg>";
    button2.onclick = toCompleted;
    button2.style.float = "right";
    button2.innerHTML = "<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>";
    button1.className = "red";
    button2.className = "green";

    let button3 = document.createElement("BUTTON");
    button3.onclick = editItem;
    button3.className = "yellow";
    button3.style.float = "right";
    button3.innerHTML = "<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>";
    

    li.appendChild(button2);
    li.appendChild(button1);
    li.appendChild(button3);
    list.appendChild(li);
}

// Add completed visual
function addCompleted(str, num) {
    // create a li and add string into li
    const list = document.getElementById("completed");
    let li = document.createElement("LI");
    let span = document.createElement("SPAN");
    let text = document.createTextNode(str);
    span.appendChild(text);
    li.appendChild(span);

    // add id into li
    let id = document.createElement("SPAN");
    let idText = document.createTextNode(num);
    id.className = "idHide";
    id.appendChild(idText);
    li.appendChild(id);

    // create all buttons and add it into li
    let button1 = document.createElement("BUTTON");
    let button2 = document.createElement("BUTTON");
    button1.onclick = deleteItem;
    button1.style.float = "right";
    button1.innerHTML = "<i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>";
    button2.onclick = toPending;
    button2.style.float = "left";
    button2.innerHTML = "<i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>";
    button1.className = "red";
    button2.className = "green";

    let button3 = document.createElement("BUTTON");
    button3.onclick = editItem;
    button3.className = "yellow";
    button3.style.float = "right";
    button3.innerHTML = "<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>";
    

    li.appendChild(button2);
    li.appendChild(button1);
    li.appendChild(button3);
    list.appendChild(li);
}

// Delete Operation & DELETE
function deleteItem() {
    // don't display this li anymore
    let li = this.parentElement;
    li.style.display = "none";
    let id = li.childNodes[1].innerHTML;
    // detele in ID list so the id number of it will be reusable
    idList.delete(Number(id));
    // delete in JSON
    let req = new XMLHttpRequest();
    let url = "http://localhost:3000/todos/" + id;
    req.open("DELETE", url);
    req.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            console.log("successful DELETE id: " + id);
        }
    };
    req.send(); 
}

function idChooser() {
    for (let i = 1; i <= 10000; i++) {
        if (!idList.has(i)) {
            idList.add(i);
            return i;
        }
    }
}

// Submit Operation & POST
function createItem() {
    const str = document.getElementById("input").value;
    document.getElementById("input").value = "";
    if (str === "") {
        alert("please input something!");
    }
    else {
        let num = idChooser();
        addPending(str, num);
        // POST it to JSON
        const obj = {
            content: str,
            isCompleted: false,
            id: num
        }
        let req = new XMLHttpRequest();
        let url = "http://localhost:3000/todos";
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json");
        req.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                console.log("successful POST id: " + num);
            }
        };
        req.send(JSON.stringify(obj));
    }
}

// Move to Pending Operation
function toPending() {
    // update display
    let li = this.parentElement;
    li.style.display = "none";
    let num = Number(li.childNodes[1].innerHTML);
    let str = String(li.childNodes[0].innerHTML);
    addPending(str, num);

    const obj = {
        content: str,
        isCompleted: false,
        id: num
    }
    updateData(obj);
}

// Move to Completed Operation
function toCompleted() {
    // update display
    let li = this.parentElement;
    li.style.display = "none";
    let num = Number(li.childNodes[1].innerHTML);
    let str = String(li.childNodes[0].innerHTML);
    addCompleted(str, num);

    const obj = {
        content: str,
        isCompleted: true,
        id: num
    }
    updateData(obj);
}

// PUT
function updateData(obj) {
    let req = new XMLHttpRequest();
    let url = "http://localhost:3000/todos/" + obj.id;
    req.open("PUT", url);
    req.setRequestHeader("Content-Type", "application/json");
    req.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            console.log("successful PUT id: " + obj.id);
        }
    };
    req.send(JSON.stringify(obj));
}

// line through
function editItem() {
    let li = this.parentElement;
    li.childNodes[0].classList.toggle('checked');
}







