import { generateId } from "../utils.js";
import _task from "./Task.js"

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.category=data.category;
    this.dueDate=data.dueDate;
    this.tasks=data.tasks;
    this.id = data.id || generateId()
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
 get Template(){
   return(
   `
   <div class="col-3">
    <button class="btn btn-primary">Add Another task!</button>
     <h1>${this.category}</h1>
     <h2>${this.dueDate}</h2>
     <div id="tasks-column">
     <h3>${this.tasks}</h3>
     </div>
     
   </div>
   `
   )

 }
}
