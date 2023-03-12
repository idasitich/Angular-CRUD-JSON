import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }


  GetallUsers(){
    return this.http.get("https://my-json-server.typicode.com/idasitich/Angular-CRUD-JSON/users");
  }
  SaveUser(data:any){
    return this.http.post("https://my-json-server.typicode.com/idasitich/Angular-CRUD-JSON/users",data);
  }
  deleteData(id: string){
    return this.http.delete(`https://my-json-server.typicode.com/idasitich/Angular-CRUD-JSON/users/${id}`)
  }
  updateData(id: number, data: any){
    return this.http.patch(`https://my-json-server.typicode.com/idasitich/Angular-CRUD-JSON/users/${id}`, data)
  }

}