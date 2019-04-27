import apiManager from "./apiManager"
import buildTask from "./tasks/tasks";
export default {
    savetaskHandler: () => {

        const taskName = document.querySelector("#task")
        const taskDate = document.querySelector("#date")
        console.log(taskName, taskDate)

        let PostTask = {
            userId: 1,
            taskName: taskName.value,
            taskDate: taskDate.value,
            isCompleted: false
        }
        console.log(PostTask)
        apiManager.saveTask(PostTask)
            .then(() => {
                const displayContainer = document.querySelector("#task-container")
                while (displayContainer.firstChild) {
                    displayContainer.removeChild(displayContainer.firstChild)
                }
                taskName.value = ""
                taskDate.value = ""

            }).then(()=> apiManager.getTask()).then(r => 
                buildTask(r))
                


    },
    editTaskHandler: () => {

        const taskName = document.querySelector("#name")
        const taskDate = document.querySelector("#date")



        let editTask = {

            userId: 1,
            taskName: taskName.value,
            taskDate: taskDate.value,
            isCompleted: false
        }
        
        apiManager.updateTask(editTask)
            .then(() => {
                const displayContainer = document.querySelector("#display-container")
                while (displayContainer.firstChild) {
                    displayContainer.removeChild(displayContainer.firstChild)
                }
                taskName.value = ""
                taskDate.value = ""

            })


    },



    deleteTaskHandler: () => {

        // const taskName = document.querySelector("#task")
        // const taskDate = document.querySelector("#date")
        
         
        //  console.log("delete button clicked", event.target.id())
         let taskId = event.target.id
         
        return apiManager.deleteTask(taskId)
            .then(() => {
                const displayContainer = document.querySelector("#task-container")
                while (displayContainer.firstChild) {
                    displayContainer.removeChild(displayContainer.firstChild)
                }
               return displayContainer

            }).then(()=> apiManager.getTask).then(r => console.log(r))


    },



}