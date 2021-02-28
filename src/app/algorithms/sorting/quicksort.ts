export function quickSort(arr:Array<number>): Array<number>{
    if(arr.length<=1){
        return arr;
    }else{
        let pivote:number = arr[0];
        let left:Array<number> = [];
        let right:Array<number> = [];
        for(let i = 1; i<arr.length; i++){
            if(arr[i]<pivote)
                left.push(arr[i]);
            else
                right.push(arr[i])
            
        }
        return quickSort(left).concat(pivote, quickSort(right));
    }
}