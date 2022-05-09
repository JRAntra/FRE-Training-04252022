export const View = (() => {
  const elements = {
    pendingTask: document.querySelector("#pendingTask"),
    completedTask: document.querySelector("#completedTask"),
  };
  const createPendingTmp = (arr) => {
    let tmp = "";
    arr.forEach((todo) => {
      tmp += `
          <li>
            <div class="todo_content">${todo.content}</div>
            <div> 
                <span id=${todo.id}><i class="fa fa-edit"></i></span>  
                <span id=${todo.id}><i class="fa fa-trash"></i></span>
                <span id=${todo.id}><i class="fa fa-arrow-right"></i></span>
            </div>
          </li>
          `;
    });
    return tmp;
  };
  const createCompletedTmp = (arr) => {
    let tmp = "";
    arr.forEach((todo) => {
      tmp += `
          <li>
            <div><span id=${todo.id}><i class="fa fa-arrow-left"></i></span>
            ${todo.content}</div>
            <div>
            <span id=${todo.id}><i class="fa fa-edit"></i></span>          
                <span id=${todo.id}><i class="fa fa-trash"></i></span>
                
            </div>
          </li>
          `;
    });
    return tmp;
  };
  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  return {
    createPendingTmp,
    createCompletedTmp,
    render,
    elements,
  };
})();
