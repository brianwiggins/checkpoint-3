import { generateId } from "../utils.js";
import _task from "./Task"

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.category=data.category;
    this.dueDate=data.dueDate;
    this.tasks=data.tasks;
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
 get Template(){
   return
   <div className="col-3">
     <h1>${this.category}</h1>
     <h2>${this.dueDate}</h2>
     <h3>${this.tasks}</h3>
   </div>
  

 }
}
