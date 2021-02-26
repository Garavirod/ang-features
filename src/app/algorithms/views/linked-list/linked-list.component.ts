import { LinkedList } from '../../interfaces/LinkedList';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.css']
})
export class LinkedListComponent implements OnInit {

  ln:LinkedList;
  constructor() { 
    this.ln = new LinkedList();
  }

  ngOnInit(): void {    
    this.ln.printList();
  }


  fillListRandomNumbers(){
    for(let i = 0; i<20; i++){
      const n = Math.floor( Math.random() * 200);
      this.ln.addItem(n);
    }
    
    this.ln.printList();
  }


  removeFirstFromList(){
    this.ln.removeFirst();
    console.log("-------------");    
    this.ln.printList();
  }

  

}
