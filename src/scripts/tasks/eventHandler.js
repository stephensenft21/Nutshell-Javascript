import apiManager from "./apiManager"

export default {
    savetaskHandler: () => {

        const taskName = document.querySelector("#task")
        const taskDate = document.querySelector("#date")
console.log(taskName,taskDate)

        let PostTask = {
            userId: 1,
            taskName: taskName.value,
            taskDate: taskDate.value,
            isCompleted: false
        }
        console.log(PostTask)
        apiManager.saveTask(PostTask)
            .then(() => {
                const displayContainer = document.querySelector("#display-container")
                while (displayContainer.firstChild) {
                    displayContainer.removeChild(displayContainer.firstChild)
                }
                taskName.value = ""
                taskDate.value = ""

            })
            

    },
    editTaskHandler: () => {

        const taskName = document.querySelector("#name")
        const taskDate = document.querySelector("#date")



        let editTask = {

            userId: 1,
            taskName: taskName.Value,
            taskDate: taskDate.Value,
            isCompleted: false
        }







        console.log()
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

        const taskName = document.querySelector("#name")
        const taskDate = document.querySelector("#Date")



        let deleteTask = {
            Id: 1,
            userId: 1,
            taskName: taskName.Value,
            taskDate: taskDate.Value,
            isCompleted: false
        }







        console.log()
        apiManager.deleteTask(deleteTask)
            .then(() => {
                const displayContainer = document.querySelector("#display-container")
                while (displayContainer.firstChild) {
                    displayContainer.removeChild(displayContainer.firstChild)
                }
                taskName.value = ""
                taskDate.value = ""

            })
            .then()

    },



}