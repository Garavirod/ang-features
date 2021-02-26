
export class LinkedList{    
    private last:Node|null;
    private first:Node|null;

    constructor(){
        this.last = null;
        this.first = null;
    }

    public isEmpty(){
        return (this.first)? false : true;
    }
    
    public addItem(item:any){
        const n = new Node(item);
        if(this.isEmpty()){
            this.first = n; //reference to first
            this.last = n; //adder
        }else{
            this.last.linkNode(n);
            this.last = n;
        }        
    }

    public getFirst(){
        return this.first.getItem();
    }

    public getLast():any{
        return this.last.getItem();
    }

    public removeFirst(){
        if(!this.isEmpty()){
            this.first = this.first.getNext();        
        }
    }

    public printList():void{
        if(this.isEmpty()){
            console.log("Empty list!!");
            
        }else{
            this.printNodes(this.first);
        }
    }

    private printNodes(n:Node){        
        console.log(n.getItem());  
        if(n.getNext()!== null){
            this.printNodes(n.getNext());
        }          
        
    }


}


class Node{
    private item:any;
    private next:Node|null;

    constructor(item:any){
        this.item = item;
        this.next = null;
    }

    getItem():any{
        return this.item;
    }

    getNext():Node|null{
        return this.next;
    }

    linkNode(n:Node|null){
        this.next = n;
    }
}