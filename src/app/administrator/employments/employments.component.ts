import { Component } from '@angular/core';
import { RestapiService } from 'src/app/service/restapi.service';
'@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-foods',
  templateUrl: './employments.component.html',
  styleUrls: ['./employments.component.css']
})
export class EmploymentsComponent {
  constructor(private service:RestapiService){}

  ngOnInit(): void{
    this.getAllusers()
  }

  userdata: any;
  displayedColumns: string[] = ['ID Card', 'Name', 'Salary', 'Role','Action'];

  update=false;

  getAllusers(){
    this.service.GetallUsers().subscribe(response=>{
      this.userdata=response;
      console.log(this.userdata[0])
    })
  }

  deleteUser(id: string){
   {
      return this.service.deleteData(id).subscribe(response=>{
        alert("Do you want to delete the data?")
        const deletedContrat = this.userdata.find((x: any) => x.id === this.userdata.id);
        this.userdata.splice(this.userdata.indexOf(deletedContrat), 1);
      });
  }
  }
 
  show='';

  hiddenform=true;
  code="";
  name="";
  salary="";
  role="";
  id = "";
 


  updateUser(id:any, value: any) {
    this.show="show";
    let body = {
      code: value.code,
      name: value.name,
      salary:value.salary,
      role : value.role
    }
    this.service.updateData(id, body)
      .subscribe(response => {
      console.log(response);
        this.id = id;
       this.code=body.code;
       this.name=body.name;
       this.salary=body.salary;
       this.role=body.role;
      })
  }  
  updateNewUser(id:any, value: any){
    this.show="";
    let body = {
      id : value.id,
      code: value.code,
      name: value.name,
      salary:value.salary,
      role : value.role
    }

    this.service.updateData(id, body)
      .subscribe(response => {
        console.log(response);
        this.getAllusers()
      })
  }
}

