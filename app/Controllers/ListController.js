import _listService from '../Services/ListService.js';
import _store from '../store.js';

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
let lists = _store.State.lists;
let template ='';

lists.forEach(list=>{
  template+=list.Template
})
document.querySelector("#lists").innerHTML=template
}
_drawLists();
//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    console.log("List controller is live");
    _drawLists();
  }

  addList(event){
    event.preventDefault();
    let formData=event.target;
    let newList ={
      category: formData.category.value,
      dueDate: formData.dueDate.value,
    }
    _listService.addList(newList)
    formData.reset()
    //@ts-ignore
    $('#list-form').modal('toggle');
    _drawLists()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
delList(id){
_listService.remList(id);
_drawLists();
}
addTask(event, id){
event.preventDefault();
let task = event.target.tasks.value;
_listService.addTask(id, task);
_drawLists();
}
delTask(taskID, listID){
  _listService.remTask(listID,taskID);
  _drawLists();
}
}
