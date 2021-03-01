export interface Graph{
    edges:number;
    vertex:number;    
    fillGraph(...values:any[]):void;
    printGraph():void;
    
}


//Non ponderated graph
export class AdMatrixGraph implements Graph{
    //Override
    edges:number;
    vertex:number;
    matrix:Array<Array<boolean>>;
    constructor(e:number, v:number){
        this.edges = e;
        this.vertex = v;
        this.setFillMatrix();
    }

    private setFillMatrix( ):void{
        for(let i = 0; i < this.vertex; i++){
            for(let j = 0; this.edges; j++){
                this.matrix[i][j] = false;
            }
        }
    }

    //Override
    fillGraph(v1:number, v2:number):void{
        this.matrix[v1-1][v2-1] = true;
    }

    //Override
    printGraph():void{
        let str = "";
        for(let i = 0; i < this.vertex; i++){
            for(let j = 0; this.edges; j++){
                str += `${this.matrix[i][j]} `;                
            }
            str + "\n";
        }
        console.log(str);        
    }
}