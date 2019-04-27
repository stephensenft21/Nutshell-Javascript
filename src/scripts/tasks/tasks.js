 import eventHandler from "./eventHandler"
 
 const buildTask = (taskArray) => {
     // <article>
     //   <h3>task Name</h3>
     //   <p>task Type"date"</p>
     // <button>"Complete"</button>
     // </article>
     const taskArticle = document.createElement("article");
     console.log(taskArray)
     taskArray.forEach(task => {


         const taskHeader = document.createElement("h3");
         taskHeader.textContent = task.taskName;
         taskHeader.id = `header--${task.Id}--task`
         const taskParagraph = document.createElement("p");
         taskParagraph.textContent = task.taskDate
         taskParagraph.id = `paragraph--${task.id}--task`
         const checkBoxInput = document.createElement("input")
         checkBoxInput.id = task.id
         checkBoxInput.setAttribute("type", "checkbox");
         const deleteButton = document.createElement("button")
         deleteButton.setAttribute("id","taskToDelete")
         deleteButton.textContent = "Delete Task"
         deleteButton.id = task.id
         deleteButton.addEventListener("click", eventHandler.deleteTaskHandler)
         const editButton = document.createElement("button")
         editButton.setAttribute("id", "taskToEdit")
         editButton.textContent = "Edit Task"
         editButton.addEventListener("click", eventHandler.editTaskHandler)
          
        
        const taskContainer = document.createElement("div")
         
         
         taskContainer.appendChild(taskHeader)
         taskContainer.appendChild(taskParagraph)
         taskContainer.appendChild(checkBoxInput)
         taskContainer.appendChild(deleteButton)
         taskContainer.appendChild(editButton)




         taskArticle.appendChild(taskContainer)

         document.querySelector("#task-container").appendChild(taskArticle)


     })


     //      <p>Click the button to create a Checkbox.</p>

     // <button onclick="myFunction()">Try it</button>

     // <script>
     // function myFunction() {
     //   var x = document.createElement("INPUT");
     //   x.setAttribute("type", "checkbox");
     //   document.body.appendChild(x);
     // }


     //return taskArticle
 }






 // let currentUserId = 1





 export default buildTask