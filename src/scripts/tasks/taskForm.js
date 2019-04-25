import eventHandler from "./eventHandler";


const Newtaskform = {
    BuildTaskForm() {
        const newTaskLabel = document.createElement("label")
        newTaskLabel.textContent = "New Task:"

        const newTaskInput = document.createElement("input")
        newTaskInput.id = "task"
        newTaskInput.placeholder = "Enter Task"

        const dateLabel = document.createElement("label")
        dateLabel.textContent = "Target Date:"

        const dateInput = document.createElement("input")
        dateInput.textContent = "Date Input"
        dateInput.id = "date"
        dateInput.placeholder = "Enter Date"

        const saveButton = document.createElement("button")
        saveButton.textContent = "Save Task"
        saveButton.addEventListener("click",eventHandler.savetaskHandler
        )
        console.log(Newtaskform)
        
        const editButton = document.createElement("button")
        editButton.textContent = "Edit Task"
        editButton.addEventListener("click", eventHandler.editTaskHandler)
      
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete Task"
        deleteButton.addEventListener("click", () => {
            eventHandler.deleteTaskHandler()
        })


        const TaskFormContainer = document.querySelector("#display-container")
        TaskFormContainer.appendChild(newTaskLabel)
        TaskFormContainer.appendChild(newTaskInput)
        TaskFormContainer.appendChild(dateLabel)
        TaskFormContainer.appendChild(dateInput)
        TaskFormContainer.appendChild(saveButton)
        TaskFormContainer.appendChild(editButton)
        TaskFormContainer.appendChild(deleteButton)

    }







}





export default Newtaskform