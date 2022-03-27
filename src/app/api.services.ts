import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public BASE_URL = "https://reqres.in/";
  id:any;
  service_name:any;
  deviceToken:any;
  constructor(private http:HttpClient) { }

  getData(url){
    return this.http.get(this.BASE_URL + url);
  }

  postData(url,data){
    return this.http.post(this.BASE_URL + url , data)
  }

  getDataWithToken(url){
    let headers = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
    return this.http.get(this.BASE_URL + url, {headers:headers});
  }

  postDataWithToken(url, data){
    let headers = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
    return this.http.post(this.BASE_URL + url , data, {headers:headers})
  }
}
