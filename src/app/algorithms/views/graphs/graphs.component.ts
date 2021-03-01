import { Component, OnInit } from '@angular/core';
import { AdyacentNonPonMatrixGraph, Graph, AdyacentPonMatGraph, AdyacentListGraph } from '../../datastructures/Graphs';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  graph1:Graph;
  graph2:Graph;
  graph3:Graph;
  constructor() { 
    this.graph1 =  new AdyacentNonPonMatrixGraph(7);    
    this.graph2 = new AdyacentPonMatGraph(5);
    this.graph3 = new AdyacentListGraph(9);
  }

  ngOnInit(): void {
    console.log(".....NON PONDERATED GRPAH....");    
    this.graph1.fillGraph(3,5);
    console.log(".....PONDERATED GRPAH....");
    this.graph2.fillGraph(4,2,12);
    console.log(".....NON PONDERATED LIST ADYACENT GRPAH....");
    this.graph3.fillGraph(4,[3,1,5]);
  }

}
