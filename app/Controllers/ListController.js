import ListService from '../Services/ListService.js';
import _listService from '../Services/ListService.js';
import _store from '../store.js';

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
let lists = _store.State.lists;
let listsElem=document.getElementById("lists");
let template ='';
lists.forEach(list=>{
  template+=list.Template
})
listsElem.innerHTML=template;
}

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
      tasks: formData.tasks.value,
    }
    _listService.addList(newList)
    formData.reset()
    //@ts-ignore
    $('#list-form').modal('toggle');
    _drawLists()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
