const URL = "http://localhost:8088"

const API = {

   //Api call to return all results in a given object
   getTask() {
      return fetch(`${URL}/Tasks`)
         .then(r => r.json())

   },
   // api call to save new user, message, friend, task, news article
   getOneTask(id) {

      return fetch(`${URL}/Tasks${id}`)
         .then(inputs => inputs.json())
   },

   // api call to save new user, message, friend, task, news article
   saveTask(object) {
      return fetch(`${URL}/Tasks`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(object)

      }).then(jsonData => jsonData.json())

   },

   // api call to delete object from json files
   deleteTask() {

      return fetch(`${URL}/Tasks$`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json"
         }
      })
   },


   //api call to edit current object
   updateTask(object) {
      return fetch(`${URL}/Tasks`, {
         method: "PATCH",
         header: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(object)
      })
   },
}


export default API