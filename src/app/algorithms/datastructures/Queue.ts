export class Queue{
    first:Node|null;
    last:Node|null;
    size:number;

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }


    public isEmpty(){
        return (this.first)? false: true;
    }

    public addToQueue(e:any){
        const n = new Node(e);
        if(this.isEmpty()){
            this.first = n;
            this.last = n;
        }else{
            this.last.setNext(n);
            this.last = n;
        }
    }

    public getSize():number{ 
        this.size = 0;    
        if(!this.isEmpty()){
            this.count(this.first);         
        }
        return this.size;          
        
    }

    private count(n:Node){
        this.size++;
        if(n.getNext()!== null){
            this.count(n.getNext());
        }
    }

    public removeFirst(){
        if(!this.isEmpty()){
            this.first = this.first.getNext();
        }
    }

    public getFirst():any{
        return this.first.getItem();        
    }

    public printQueue():void{
        if(!this.isEmpty()){
            this.printNode(this.first);
        }else{
            console.log("Queue is empty!!");
            
        }

    }

    private printNode(e:Node):void{
        console.log(e.getItem());
        if(e.getNext()!== null){
            this.printNode(e.getNext());
        }        
    }

}


class Node{
    private item:any;
    private next:Node|null;

    constructor(elem:any){
        this.item = elem;
        this.next = null;
    }

    public setNext(n:Node|null):void{
        this.next = n;
    }

    public getNext():Node|null{
        return this.next;
    }

    public getItem():any{
        return this.item;
    }
}