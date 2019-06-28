let todobox=document.getElementById("todo");
let addbtn=document.getElementById("btn");
let todolist=document.getElementById("list");

addbtn.onclick = function(){
    let todo=todobox.value;
   // todolist.innerHTML+='<li>'+todo+'<li>';
   let newtask=document.createElement('li');
   newtask.innerText=todo;
   todolist.appendChild(newtask);
}