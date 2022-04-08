import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  isCllickOn:boolean = false;
  pic:any={};

  constructor(private httpService:HttpCallsService) {
      httpService.getDogPic()
                  .subscribe(p => 
                    this.pic = p
                    );
          
     
   }


  ngOnInit(): void {
  }

  onClick(){
    this.isCllickOn = !this.isCllickOn;
  }
}
