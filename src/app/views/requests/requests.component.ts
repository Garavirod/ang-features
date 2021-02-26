import { RequestService } from './../../services/request.service';
import { Component, OnInit } from '@angular/core';
import { concat, forkJoin, Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  x:number;
  y:number;
  copied:string;

  obsInterval$:Observable<number>;

  constructor(private reqService: RequestService) { }

  ngOnInit(): void {
    //this.getDataByFork();
    //this.getDataByMergeMap();
    this.observablesGeneratorByOf();
    //Events
    this.clcikEvent();
    this.scrollEvent();
    this.copyEvent();
    //Defer
    this.getRandomCar();
    this.getRandomCar();
    
  } 

  /* 
    JOINFORK

    ForkJoin execute each observable of the list parallely, 
    it doesn't matter the order      
  */
  getDataByFork():void{
    const obsList = [
      this.reqService.getCharacters(),
      this.reqService.getQuotes(), 
      this.reqService.getRandomChar()
    ]; 
    forkJoin(obsList).subscribe(
      (res)=>{
        console.log(res);        
      },
      (error)=>{
        console.log(error);        
      }
    )        
  }

  /* 
    MERGEMAP

    mergeMap is used when we want to use data from one observer into other one
    inmediatly.
    returning like response the response of the last observer in the list
  */
  getDataByMergeMap(){
     this.reqService.getRandomChar().pipe(
       mergeMap((res:number)=>this.reqService.getCharacterByPk(res)),
       mergeMap((res2:any)=>this.reqService.getCharacterByPk(res2[0]['appearance'][0])),
     )
     .subscribe(
       (res:any)=>{
        console.log(res);        
       },
       (error)=>{
         console.log(error);         
       }
     ) 
  }


  /* 
  
    CONCAT 

    execute each observable one by one, when a obsrvable being completed
    the second one is executed after that, it continues with
    the third one this ways until finishing.
    
  */
  exeConect(){
    const obs$ = this.reqService.initCounterInterval().pipe(take(4));
    const obs2$ = this.reqService.rangeObserver();

    const result = concat(
      obs$,
      obs2$
    );

    result.subscribe(
      (res)=>(console.log(res))
    )

  }


  /* 
    OF (Described on the service)
  */
  observablesGeneratorByOf(){
    const observer = {
      next: x => console.log("Observer got next value ",x),
      error: err => console.log("Error got it by ",err),
      complete: () => console.log("Done!!")                  
    }
    this.reqService.getObservableByType("object")
    .subscribe(observer); //subscribeing using an observer
  }


  /*  FROM (Described on the service) */
  observableGeneraorByFrom(){

  }


  /* FROMEVENT */

  clcikEvent(){
    this.reqService.clickDetecter().subscribe(
      (res)=>{
        this.x = res.x;
        this.y = res.y;
        console.log(res);        
      }
    )
  }


  scrollEvent(){
    this.reqService.scrollDetecter().subscribe(
      (res)=>{
        console.log("Scrolling...");
        
      }
    )
  }

  copyEvent(){
    this.reqService.copyDetecter().subscribe(
      (res:any)=>{
        console.log(res);        
        this.copied = res.target.innerText;
      }
    );
  }

  /* 
    DEFER (Described on service)
  */

  getRandomCar(){
    this.reqService.getOneCar()
    .subscribe((res)=>{console.log("THIS IS THE CAR :> ",res)})
  }


  /* INTERVAL */

  getIntervalObs(){
    this.obsInterval$ = this.reqService.initCounterInterval();
    this.obsInterval$.subscribe((x)=>{console.log(x)});
    
  }


  /* 
    TIMER 
    Executes something after x seconds 
    acording to argument established on timer(x)
  */
  getObsTimer(){
    this.reqService.initTimer().subscribe((x)=>{console.log("triggered");
    })
  }


  /*  FILTER AND MAP */
  filerNumbers(){
    this.reqService.filterMapOperatiors()
    .subscribe((x)=>console.log(x)); 
  }

  /* 
    SHARE
  */

  useShareObs(){
    this.reqService.sharedObserver();    
  }

}
