import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export enum MenuEnum{
  Dog = 'dog',
  Cat = 'cat',
  Fox = 'fox',
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  menuEnum = MenuEnum;

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  onClick(link:MenuEnum){
    switch (link) {
      case this.menuEnum.Dog:
        this._router.navigate(['dogs'])
        break;
      case this.menuEnum.Cat:
        this._router.navigate(['cats'])
        break;
      case this.menuEnum.Fox:
        this._router.navigate(['foxes'])
        break;
      default:
        break;
    }

  }
}
