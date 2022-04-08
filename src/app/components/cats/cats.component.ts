import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  catFacts:any=[];

  constructor(private httpService:HttpCallsService) {   
      httpService.getCatFact()
                  .subscribe(c => 
                   this.catFacts = c
     );  
  }

  ngOnInit(): void {
  }

}
