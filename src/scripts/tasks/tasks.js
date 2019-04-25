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
        taskHeader.id = task.id
         const taskParagraph = document.createElement("p");
         taskParagraph.textContent = task.taskDate
         taskParagraph.id = task.id
         const checkBoxInput = document.createElement("input")
          checkBoxInput.id = task.id
         checkBoxInput.setAttribute("type", "checkbox");
         document.body.appendChild(checkBoxInput)
         
         
         
         
         taskArticle.appendChild(taskHeader);
         taskArticle.appendChild(taskParagraph);

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