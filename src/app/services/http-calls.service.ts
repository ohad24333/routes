import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private _client :HttpClient) { }

  getDogPic(){
    return this._client.get('https://dog.ceo/api/breeds/image/random'); 
  }

  getCatFact(){
   return this._client.get('https://cat-fact.herokuapp.com/facts');   
  }

  getFoxPic(){
    return this._client.get('https://randomfox.ca/floof/?ref=apilist.fun')
  }
}
