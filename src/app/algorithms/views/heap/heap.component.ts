import { Heap } from './../../interfaces/Heap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heap',
  templateUrl: './heap.component.html',
  styleUrls: ['./heap.component.css']
})
export class HeapComponent implements OnInit {

  heap:Heap;
  constructor() { 
    this.heap = new Heap();
  }

  ngOnInit(): void {
    this.fillHeap();
    
  }

  fillHeap():void{
    for(let i = 0; i<10; i++){
      this.heap.addToHeap(i);
    }
    this.heap.printHeap();
    console.log("Size heap :> ",this.heap.getSize());
    
  }


  dispatchHeap():void{
    this.heap.popHeap();
    console.log("_-_-_-_-_-_-_-_");    
    this.heap.printHeap();
  }

}
