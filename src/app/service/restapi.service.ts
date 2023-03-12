import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }


  GetallUsers(){
    return this.http.get("http://localhost:3000/users");
  }
  SaveUser(data:any){
    return this.http.post("http://localhost:3000/users",data);
  }
  deleteData(id: string){
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }
  updateData(id: number, data: any){
    return this.http.patch(`http://localhost:3000/users/${id}`, data)
  }

}