import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public favouriteObject = [] ;
  constructor(private http: HttpClient) { }

  getBeers(searchValue,page){
    let promise = new Promise((resolve, reject) => {
      var apiURL="";
      if(searchValue)
         apiURL = 'https://api.punkapi.com/v2/beers?beer_name='+searchValue;
      else
         apiURL = 'https://api.punkapi.com/v2/beers?page='+page;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          }
        );
    });
    return promise;
  }


}
