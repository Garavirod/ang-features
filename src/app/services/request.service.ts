import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, fromEvent, defer, interval, timer, pipe, range } from 'rxjs';
import { bufferTime, filter, map, mapTo, share, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  BASE_URL_BDD = 'https://www.breakingbadapi.com/api';
  constructor(private _http: HttpClient) { }


  getQuotes(){
    return this._http.get(`${this.BASE_URL_BDD}/quote/random`);
  }

  getCharacters(){    
    return this._http.get(`${this.BASE_URL_BDD}/characters`);
  }

  getCharacterByPk(id:number){    
    return this._http.get(`${this.BASE_URL_BDD}/characters/${id}`);
  }


  /* 
    Obserbavles

    Observable: it is the stuff we want to observe
    Observer: it's who observs the observable and it is 
    Subject: it's who emits events o data stream through the observable.

    It is necessary to subscribe an observer to the observable to rerieve data
    emited by the sibject.
  */
  
  getRandomChar(): Observable<number>{
    const data$ = new Observable<number>(observer =>{      
      observer.next(2);    
      observer.complete();  
    });
    return data$;
  }


  getObserbaleRxJS(): Observable<number>{
    const obs:Observable<number> = Observable.create(function (observer){
      observer.next(1);
      observer.next(2);
      observer.next(3);
      if(false){ //any condition throw an error if you coonsdered like an error
        observer.error('There was an error connection!');
      }
      //all that comes inmediatly afeter an error is not being executed
      //if error is thrown
      setTimeout(()=>{
        observer.next(4);
        observer.complete(); //complete is just when all next were completed
      },1000);
    })
    return obs;
  }

  /* 
    OF

    of property from rxjs creaes an observable through out arrays, 
    numbers/ strings, objects etc..
  */
  getObservableByType(type:string):Observable<any>{
    switch (type) {
      case "string":
        return of("Hello","World");
      case "number":
        return of(1,2,5,6,7,89);
      case "array":
        return of(["Apple","Orange","Lime"],[3,4,5,,6])
      case "object":
        return of(
          { size: "Large", toppings: ["Oreos", "Chocolate syrup"] },
          { size: "small", toppings: ["Strawberries"] }
        );
    }
  }


  /* 
    FROMEVENT

    Creates observables that are executed when certaint type of
    events like (mouseEvent, scrollevent, etc) are detected

    in this case it is not necessary to add an event handler
    inmeditaly a  functions is added to target we specified
    in this case 'DOCUMENT' bu could be a 'COMPONENT' or a another 
    element.
  
  */



  clickDetecter():Observable<MouseEvent>{
    const clcik$ = fromEvent<MouseEvent>(document,"click");
    return clcik$;
  }

  scrollDetecter():Observable<UIEvent>{
    const scroll$ = fromEvent<UIEvent>(document,"scroll");
    return scroll$;
  }

  copyDetecter():Observable<Clipboard>{
    const clipboard$ = fromEvent<Clipboard>(document,"copy");
    return clipboard$;
  }


  /* 
    DEFER 

    We can create observable lazyload, this means each time we got 
    a subscription it always is created a new observable.
    unlike OF or FROM that always return the same.

  */

  getOneCar():Observable<string>{
    const cars = ["Bently","Bugatti","Ferrari","Cicitalia","Porche"];
    const ranomCarIndex = Math.floor((Math.random()*4));
    return defer(()=> of(cars[ranomCarIndex]));
  }


  /* TIMER */
  initTimer(){
    const timer$ = timer(1500);
    return timer$; //returns an observable that waits 1.5 sec
  }


  /* 
    INTERVAL 

    counts from 0 each x seconds interval(x)
    
  */
  initCounterInterval(){
    const interval$ = interval(500); //each one second it counts
    return interval$;
  }


  /* 
    BUFFERTIME
    Each certain quantity of time data is storgae in a buffer
  */

  buffetTimeOper(){
    const timer$ = this.initCounterInterval();
    const buff$ = timer$.pipe(
      bufferTime(2000) //each 2 sec storage data into buffer
    )
    return buff$;
  }


  /* 
    RANGE 

    It counts/print o do someting from x to yrange(x,y)
  */

  rangeObserver(){
    return range(8,15);
  }


  /* FILTER AND MAP */
  filterMapOperatiors(){
    const numArray$ = this.getObservableByType('number');

    //pipe is function (encadenado de opradores) allow applyes a set of 
    // operators on the data stream syncrounus, thats returning a new object
    const filteredObs$ = pipe(
      filter((n:number)=>n%2 === 0), //filter acording to an specifyc ondition
      map((n) => n*n) // applies operation to elements
    )
    //onece data was filtered is returned to someone in order to getting subscribe

    return filteredObs$(numArray$)             
  }


  /* 
    SHARE 

    This operator make that one observer being shared with many others
    this way, observerable subscription is going to execute only once

  */

  sharedObserver(){
    const timer$ = this.initTimer();

    const obsFilterd$ = timer$.pipe(
      tap(()=>console.log('tap on')),
      mapTo('END OBS')
    )    

    //creates an shared observable
    const obs =  obsFilterd$.pipe(share()); 

    //Three subscriptions that share the same observable
    obs.subscribe(c=>(console.log(c)))
    obs.subscribe(c=>(console.log(c)))
    obs.subscribe(c=>(console.log(c)))

    
    
  }

  /*  
    SWITCHMAP 
    allow to interrupt a strem and continus again    
  */
  
  switchMapOperator(){
    fromEvent(document,'click').pipe( 
      switchMap(
        // all stream insed wicthmap is interrupted when being neccessary
        () => interval(1000)
      )) // interrupt the previuos stream to start again
      .subscribe(console.log);    
  }


}
