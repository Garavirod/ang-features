import { Queue } from "./Queue";

export interface Graph{
    fillGraph(...values:any[]):void;
    printGraph():void;
    BFS(vertex:number):void;
}


/* 
    ----    ADYANCENT MATRIX ----
*/

//Non ponderated graph
export class AdyacentNonPonMatrixGraph implements Graph{

    matrix:Array<Array<any>>;
    constructor(numVertex:number){
        this.matrix = new Array(numVertex).fill(0).map(() => new Array(numVertex).fill(0));        
    }

    //Override
    fillGraph(v1:number, v2:number):void{
        this.matrix[v1-1][v2-1] = 1;
        this.printGraph();
    }

    //Override
    printGraph():void{        
        console.log(this.matrix);        
    }

    BFS():void{}


}

//Ponderated graph
export class AdyacentPonMatGraph implements Graph{

     matrix:Array<Array<any>>;
     constructor(numVertex:number){
         this.matrix = new Array(numVertex).fill(0).map(() => new Array(numVertex).fill(0));        
     }
 
     //Override
     fillGraph(v1:number, v2:number, w:number):void{
         this.matrix[v1-1][v2-1] = w;
         this.printGraph();
     }
 
     //Override
     printGraph():void{        
         console.log(this.matrix);        
     }

     BFS():void{}
}

/* 
    ----    ADYANCENT LIST ----
*/

/* 
    It is an array and each item it is a vertex
    arr = [v1(idx), v2(idx), ...., vn(idx)]
    v(1) = arr[ v1, v3, v6]
    v(2) = arr[ v1, v3, v6]
    v(3) = arr[ v1, v8]
    Adayancece list is an array where each index represent the graph vertex
    and the cotentent of that index is another array that is felt with 
    a list of vertexes connected to it.
*/


export class AdyacentListGraph implements Graph{
    /* Override */
    matrix:Array<Array<any>>;
    numVertex:number;
    constructor(numVertex:number){
        this.numVertex = numVertex;
        this.matrix = new Array(numVertex).fill([]);        
    }

    /* Override */
    fillGraph(vertex:number, vertexes:Array<any>):void{
        this.matrix[vertex] = vertexes;
        this.printGraph();
    }
    /* Override */
    printGraph():void{
        console.log(this.matrix);        
    }

    //complexity O(V+E)
    //Breadth fisrt search (búsqueda en anchura)
    BFS(vertex:number):void{
        let visited = new Array(this.numVertex).fill(-1);
        let queue = new Queue();
        let u:any,v:any;
        queue.addToQueue(vertex-1);
        visited[vertex-1] = 0;
        while(!queue.isEmpty()){
            u = queue.getFirst();
            queue.removeFirst();
            for(let i = 0; i<this.matrix[u].length; i++){
                v = this.matrix[u][i];
                if(visited[v] == -1){
                    visited[v] = visited[u]  + 1;
                    queue.addToQueue(v);
                }
            }
        }
        console.log(visited);
        
    }
}


/* 
    ----    EDGE LIST ----
*/

/* 
    arr = [e1, e2, ....., en]
    It is an array and each item is an edge, and its content is a pair of vertexes,
    this way: e = (vi, vj).
*/

export class EdgetListGraph implements Graph{
    /* Override */
    matrix:Array<any>;

    constructor(numEdges:number){
        this.matrix = new Array(numEdges).fill(null);        
    }

    /* Override */
    fillGraph(edge:number, vertexes:Array<any>):void{
        this.matrix[edge-1] = vertexes;
        this.printGraph();
    }
    /* Override */
    printGraph():void{
        console.log(this.matrix);        
    }

    BFS():void{}
}


