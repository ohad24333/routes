import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.css']
})
export class FoxComponent implements OnInit {

  foxPic:any={};

  constructor(private httpService:HttpCallsService) {
      httpService.getFoxPic()
                  .subscribe(p =>
                             this.foxPic = p
                    );
                    
   }

  ngOnInit(): void {
  }

}
