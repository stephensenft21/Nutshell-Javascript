
import apiManager from "./tasks/apiManager"
import buildTask from "./tasks/tasks";
import Newtaskform from "./tasks/taskForm";

// let userId = 1
apiManager.getTask().then(r => {
    buildTask(r)
    })
                                
Newtaskform.BuildTaskForm()

