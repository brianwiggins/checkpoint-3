import List from "../Models/List.js";
import _store from "../store.js";
import Task from "../Models/Task.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(newList){
    newList = new List(newList);
    _store.State.lists.push(newList);
    console.log(_store.State.lists)
  }

  getID(elem){
    for(let i=0;i<_store.State.lists.length;i++){
      if(_store.State.lists[i]==elem){
       return _store.State.lists[i].id
      }
    }
  }
  //removes an element in the state lists array by its id

  rembyID(id){
    for(let i=0;i<_store.State.lists.length;i++){
      if(_store.State.lists[i].id==id){
        _store.State.lists.splice(i,1);
      }
    }
  }
  constructor(){
    console.log("List service is live")
  }

}

const LISTSERVICE = new ListService();
export default LISTSERVICE;
