import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API="http://localhost:8080";
  public registerUser(userData: any)
  {
    return this.http.post(this.API + '/registerUser' , userData);
  }

  public getUsers(){
    return this.http.get(this.API+'/getUsers');
  }

  public deleteUser(U_id:any){
    return this.http.delete(this.API+'/deleteUser?U_id=' + U_id);
  }

  public updateUser(User: any){
    return this.http.put(this.API +'/updateUser', User);
  }
  constructor(private http: HttpClient) { }
}
