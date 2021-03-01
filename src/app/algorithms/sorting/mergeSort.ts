export function mergeSort(arr:Array<number>):Array<number>{
    console.log("hola");
    
    if(arr.length<=1){
        return arr;
    }else{
        const middle = Math.floor(arr.length/2);
        const left:Array<number> = arr.slice(0,middle);
        const right:Array<number> = arr.slice(middle,arr.length-1);
        return merge(mergeSort(left),mergeSort(right));
    }
}


function merge(a:Array<number>, b:Array<number>):Array<number>{
    let c:Array<number> = new Array();
    let i = 0, j= 0;
    while(i < a.length && j < b.length){
        if(a[i]<b[j]){
            c.push(a[i]);
            i++;
        }else{
            c.push(b[j]);
            j++;
        }
    }
    //remaining
    c = c.concat(a.slice(j));    
    c = c.concat(b.slice(i));    
            
    return c; //return an array sorted and merged
}

