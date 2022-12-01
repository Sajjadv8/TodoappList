import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postFormlist(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res;
    }))
  }
  getFormlist(data: any) {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res: any) => {
      return res;
    }))
  }
  UpdateFormlist(dat: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, dat).pipe(map((res: any) => {
      return res;
    }))
  }
  deleteFormlist(id : number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe (map((res :any)=>{
        return res;
      }))
    
  }
}
