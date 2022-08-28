import {TodoItem} from './todoItem';
export class TodoCollection {
    private nextId:number=1;
    constructor(public userName:string,public todoList:TodoItem[]=[]){

    }
    addTodo(task:string):number{
        while(this.todoList.find(todo=>todo.task===task)){
            task+='1';
        }
        this.todoList.push(new TodoItem(this.nextId,task));
        return this.nextId++;

    }

    getTodoById(id:number):TodoItem{
        return this.todoList.find(todo=>todo.id===id);
    }
    getTodoByComplete():TodoItem[]{
        return this.todoList.filter(todo=>todo.complete);
    }
    getTodoByInComplete():TodoItem[]{
        return this.todoList.filter(todo=>!todo.complete);
    }
    deleteTodo(id:number):void{
        this.todoList=this.todoList.filter(todo=>todo.id!==id);
    }
    getTodoSearch(search:string):TodoItem[]{
        return this.todoList.filter(todo=>todo.task.indexOf(search)>-1);    
    }


    markComplete(id:number,complete:boolean):void{
        const todoItem:TodoItem=this.getTodoById(id);
        if(todoItem){
            todoItem.complete=complete;
        }
    }


}