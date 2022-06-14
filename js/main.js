console.log("Start JS");

const inputForm = document.querySelector("#form12");
const buttonAdd = document.querySelector(".btn-primary")
const taskList = document.querySelector(".task-list")

//funções
function checkTask(taskLi){
    taskLi.classList.add("done");
}


function generateTask(task){
    // criando os elementos com o javascrpit
    const li = document.createElement("li");
    const imgClose = document.createElement("img");
    const p = document.createElement("p");
    const imgCheck = document.createElement("img");
    
    // passando os atributo que cada tag deve conter
    li.setAttribute("class", "task-item");
    imgClose.setAttribute("src", "./icons/close.png");
    imgCheck.setAttribute("src", "./icons/check.png");
    p.textContent = task;

    // amarrando os eventos dos botoes da imagem
    imgCheck.addEventListener("click", () => checkTask(li))

    // inserindo as img e o paragrafo dentro da li
    li.appendChild(imgClose);
    li.appendChild(p);
    li.appendChild(imgCheck);

    //inserindo a li dentro da ul

    taskList.appendChild(li);
}





//evento

buttonAdd.addEventListener("click", ()=>{
  const newTask = inputForm.value;
  generateTask(newTask);
  inputForm.value = "";
});