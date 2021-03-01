import { Component, OnInit } from '@angular/core';
import { quickSort } from '../../sorting/quicksort';
import { mergeSort } from '../../sorting/mergeSort';
import { binarySearch } from '../../searching/binarysearch';
@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  arr:Array<number> = [];
  index:any = null;
  
  constructor() {     
    this.fillArray();
  }

  ngOnInit(): void {
  }

  fillArray(){
    for (let i = 0; i < 80; i++) {
      this.arr.push(Math.floor(Math.random()*100));      
    }       
  }

  SortByQuickSort(){    
    this.arr = quickSort(this.arr);    
  }

  SortByMergeSort(){
    this.arr = mergeSort(this.arr);
  }

  searchByBinarySearch(item:any){
    this.index = binarySearch(this.arr, parseInt(item.value))    
  }

}
