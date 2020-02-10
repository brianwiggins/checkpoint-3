import { generateId } from "../utils.js";

export default class Task{
  constructor(data){
    this.description=data.description;
    this.dueAt=data.dueAt;
    this.id = data.id || generateId();
  }

  get Template(){
    return
    `
    <div className="col-12">
      <h4>${this.description}</h4>
      <h5>Do by:${this.dueAt}</h5>
      <h5>Time to complete: <h5 id="timeSlot"></h5></h5>
      </div>
      `
  }
}