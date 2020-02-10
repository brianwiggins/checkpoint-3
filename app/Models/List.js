import { generateId } from "../utils.js";
import _task from "./Task.js"

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.category=data.category;
    this.dueDate=data.dueDate;
    this.tasks=data.tasks || [];
    this.id = data.id || generateId()
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
 get Template(){
   return(
   `
   <div class="col-3">
   <div class="card">
   <div class="card-body">
     <h5 class="card-title">${this.category}</h5>
     <ul class="card-text">
         ${this.getTasksTemplate()}
     </ul>
     <form onsubmit="app.ListController.addList(event, '${this.id}')">
     <input
       type="text"
       name="List"
       placeholder="List"
       required
     />
     <button class="btn btn-success" type="submit">Add Task</button>
   </form>
     
     <button class="btn btn-danger" onclick="app.ListController.remTask('${
       this.id
     }')">Delete</button>
   </div>
 </div>
     
   </div>
   `
   )

 }

 getTasksTemplate(){
   let template="";
   this.tasks.forEach((task,index)=>{template+=`<li>${task}<span onclick="app.pizzasController.removeTopping('${this.id}', ${index})">X</span></li>`;
  });
  return template;
 }
}
