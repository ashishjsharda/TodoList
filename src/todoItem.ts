export class TodoItem {
    public id:number;
    public task:string;
    public complete:boolean=false;
  public constructor(id:number,task:string,complete:boolean=false) {
    this.id=id;
    this.task=task;
    this.complete=complete;
  }

  public printDetails():void{   //method
    console.log(`${this.id} ${this.task} ${this.complete}`);
  }
}