export function binarySearch(arr:Array<number>, item:number):number{
    let min=0;    
    let max=arr.length-1;    
    while(min<=max){
        let middle = Math.floor((max - min)/2);
        if(arr[middle] === item){
            return middle;            
        }else if(item < arr[middle]){
            max = middle - 1;            
        }else{
            min = middle + 1;
        }
    }
    return -1;
}