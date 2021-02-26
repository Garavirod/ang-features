export class Heap{
    private first:Node|null;
    private last:Node|null;
    private size:number;

    constructor(){
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    public isEmpty():boolean{
        return (this.last) ? false: true;
    }

    public addToHeap(e:any){
        const n = new Node(e);
        if(this.isEmpty()){
            this.first = n;
            this.last = n;
        }else{
            n.setNext(this.last);            
            this.last = n;
        }
    }

    public popHeap(){
        if(!this.isEmpty()){
            this.last = this.last.getPrevious();
        }
    }

    public printHeap():void{
        if(this.isEmpty()){
            console.log('Heap is empty');                        
        }else{
            this.printNode(this.last);
        }
    }

    public getSize():number{
        this.size = 0;
        if(!this.isEmpty()){
            this.count(this.last);
        }
        return this.size;
    }

    private count(n:Node){
        this.size++;
        if(n.getPrevious()!==null){
            this.count(n.getPrevious());
        }  
    }

    private printNode(n:Node){
        console.log(n.getItem());
        if(n.getPrevious()!==null){
            this.printNode(n.getPrevious());
        }        
    }
    

}


class Node{

    private item:any;
    private next:Node|null;

    constructor(e:any){
        this.item = e;
        this.next = null;
    }

    setNext(n:Node){
        this.next = n;
    }


    getPrevious():Node|null{
        return this.next;
    }

    public getItem():any{
        return this.item;
    }
}