import { Component } from '@angular/core';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-employadd',
  templateUrl: './employadd.component.html',
  styleUrls: ['./employadd.component.css']
})
export class EmployaddComponent {

  constructor(private service:RestapiService){}

  getUserForm(data: any){
    console.log(data);
    this.service.SaveUser(data).subscribe((result)=>{
      console.log(result);
    })
  }
  
}
