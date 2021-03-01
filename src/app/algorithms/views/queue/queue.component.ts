import { Queue } from '../../datastructures/Queue';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queue:Queue;
  constructor() { 
    this.queue = new Queue();
   }

  ngOnInit(): void {
    this.fillQueue();        
  }

  fillQueue():void{
    for(let i = 0; i<10; i++){
      const randNum = Math.floor(Math.random()*100);
      this.queue.addToQueue(randNum);      
    }
    this.queue.printQueue();    
  }

  removeItemsFromQueue(){
    this.queue.removeFirst();
    this.queue.printQueue();
    console.log("Dispatched... sieze >: ",this.queue.getSize());
        
  }

}
