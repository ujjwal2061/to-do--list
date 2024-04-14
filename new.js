document.addEventListener("DOMContentLoaded", function() {
 const inputValue=document.querySelector("#todo-input");
 const btn=document.querySelector("#add-btn");
 const list=document.querySelector("#todo-list");

 function removeTask(event) {
    const listItem = event.target.parentElement;
    const confirmRemove = confirm("Are you sure you want to remove this task?");
    if (confirmRemove) {
    list.removeChild(listItem);
    }
}

 btn.addEventListener("click", ()=>{ 
    if(inputValue.value===''){
        alert("Value can't be empty?");
    }else{
      const newTask=document.createElement("li");
      newTask.innerHTML=`${inputValue.value} 
      <i class="fas fa-times remove-btn"></i>`;
      list.appendChild(newTask);
      inputValue.value='';
      const removeButton = newTask.querySelector(".remove-btn");
      removeButton.addEventListener("click", removeTask);
    }
});


});