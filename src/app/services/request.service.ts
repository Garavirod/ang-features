import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, fromEvent, defer } from 'rxjs';

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
        return of(1,3,5,6,7,89);
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


}
