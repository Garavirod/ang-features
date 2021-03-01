import { Component, OnInit } from '@angular/core';
import { AdyacentNonPonMatrixGraph, Graph, AdyacentPonMatGraph } from '../../datastructures/Graphs';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  graph1:Graph;
  graph2:Graph;
  constructor() { 
    this.graph1 =  new AdyacentNonPonMatrixGraph(7);    
    this.graph2 = new AdyacentPonMatGraph(5);
  }

  ngOnInit(): void {
    console.log(".....NON PONDERATED GRPAH....");    
    this.graph1.fillGraph(3,5);
    console.log(".....PONDERATED GRPAH....");
    this.graph2.fillGraph(4,2,12);
  }

}
