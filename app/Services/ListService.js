import List from "../Models/List.js";
import _store from "../store.js";
import Task from "../Models/Task.js";
import STORE from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(newList){
    newList = new List(newList);
    _store.State.lists.push(newList);
    _store.saveState();
    console.log(_store.State.lists)
  }

  
  //removes an element in the state lists tasks array by its id

  remTask(listID,taskIndex){
    let foundList = _store.State.lists.find(list => list.id == listID);
    foundList.tasks.splice(taskIndex, 1);
    _store.saveState;
  }

  //adds element to state lists tasks array by the list id
  addTask(id, task){
    let foundList = _store.State.lists.find(task=>task.id==id);
    foundList.tasks.push(task);
    _store.saveState();
  }
  remList(id){
    let index = _store.State.pizza.findIndex(list=>list.id==id);
    _store.saveState();
  }
  

}

const LISTSERVICE = new ListService();
export default LISTSERVICE;
