// 除了图标基本都实现了，但是我的策略很失误，我一次性加载所有JSON file到本地后，每修改一些内容都做成1个JSON file再上传，但是没有覆盖掉原来的JSON

var copyPaste = "";
var loaded = 0;

function getJOSN() {
    const url = 'http://localhost:3000/todos';
    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest();
        req.onload = function () {
            if (this.status === 200) {
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


async function getData() {
    let a = await getJOSN();
    a = JSON.parse(a);
    initial(a);
}
getData();

function initial(arr) {
    for (let i = 0; i < arr.length; i++) {
        copyPaste = arr[i].content;
        if (arr[i].isCompleted) {
            addCompleted();
        }
        else {
            addPending();
        }   
    }
    loaded = 1;
}


function submit() {
    const item = document.getElementById("input").value;
    document.getElementById("input").value = "";
    if (item === "") {
        alert("please input something!");
    }
    else {
        copyPaste = item;
        addPending();   
    } 
}

function addPending() {

    if (copyPaste === "") {
        copyPaste = this.parentElement.firstChild.innerHTML;
        let oldLi = this.parentElement;
        oldLi.style.display = "none";
    }

    const list = document.getElementById("pending");
    let li = document.createElement("LI");
    let span = document.createElement("SPAN");
    let text = document.createTextNode(copyPaste);
    copyPaste = "";
    span.appendChild(text);
    li.appendChild(span);
    let button1 = document.createElement("BUTTON");
    let button2 = document.createElement("BUTTON");
    button1.onclick = deleteItem;
    button1.style.float = "right";
    button2.onclick = addCompleted;
    button2.style.float = "right";
    button1.className = "red";
    button2.className = "green";
    li.appendChild(button2);
    li.appendChild(button1);
    list.appendChild(li);

    if(loaded === 1)postData();
}
// Delete BUTTON
function deleteItem() {
    let li = this.parentElement;
    li.style.display = "none";
    postData();
}
function addCompleted() {
    if (copyPaste === "") {
        copyPaste = this.parentElement.firstChild.innerHTML;
        let oldLi = this.parentElement;
        oldLi.style.display = "none";
    }

    const list = document.getElementById("completed");
    let li = document.createElement("LI");
    let span = document.createElement("SPAN");
    let text = document.createTextNode(copyPaste);
    copyPaste = "";
    span.appendChild(text);
    li.appendChild(span);
    let button1 = document.createElement("BUTTON");
    let button2 = document.createElement("BUTTON");
    button1.onclick = deleteItem;
    button1.style.float = "right";
    button2.onclick = addPending;
    button2.style.float = "left";
    button1.className = "red";
    button2.className = "green";
    /*
    let path1 = document.createElement("PATH");
    path1.d = "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z";
    let svg1 = document.createElement("SVG");
    svg1.focusable = "false";
    svg1.ariaHidden = "true";
    svg1.viewBox = "0 0 24 24";
    svg1.dataTestid = "DeleteIcon";
    svg1.ariaLabel = "fontSize small";
    svg1.appendChild(path1);
    button1.appendChild(svg1);  */
    li.appendChild(button2);
    li.appendChild(button1);
    list.appendChild(li);

    if (loaded === 1) postData();
}

function postData() {
    // make JSON
    let arr = [];
    let j = 1;

    const list1 = document.getElementById("pending");
    const arr1 = list1.getElementsByTagName("li");
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].style.display !== "none") {
            let obj = {};
            obj.content = arr1[i].firstChild.innerHTML;
            obj.isCompleted = false;
            obj.id = j;
            j++;
            arr.push(obj);
        }
    }

    const list2 = document.getElementById("completed");
    const arr2 = list2.getElementsByTagName("li");
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].style.display !== "none") {
            let obj = {};
            obj.content = arr2[i].firstChild.innerHTML;
            obj.isCompleted = true;
            obj.id = j;
            j++;
            arr.push(obj);
        }
    }

    // POST
    let req = new XMLHttpRequest();
    let url = "http://localhost:3000/todos";
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            console.log("success");
        }
    };
    req.send(JSON.stringify(arr));
}











