export interface Graph{
    fillGraph(...values:any[]):void;
    printGraph():void;
    
}


//Non ponderated graph
export class AdyacentNonPonMatrixGraph implements Graph{

    matrix:Array<Array<any>>;
    constructor(v:number){
        this.matrix = new Array(v).fill(0).map(() => new Array(v).fill(0));        
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
}


export class AdyacentPonMatGraph implements Graph{

     matrix:Array<Array<any>>;
     constructor(v:number){
         this.matrix = new Array(v).fill(0).map(() => new Array(v).fill(0));        
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
}

