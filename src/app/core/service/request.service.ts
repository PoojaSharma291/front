import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Request {
  id;
  firstName;
  lastName;
  detail;
  city;
  phoneNumber;
  type;
  status;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  requests: Request[];


  constructor(private http: HttpClient) { }


  getStoredRequests() {
    return this.requests;
    }

    get() {
        return this.http.get<any>('assets/request.json')
      .toPromise()
      .then(res => <Request[]>res.data)
      .then(data => { return data; });
      };

      set(requests) {
        this.requests = requests;
      };

    setUpdatedRequest(updatedRequest){
        this.get().then( result => {
          this.requests = result;
          this.requests.splice(0,0,updatedRequest);
          return true;
        })
    };

    
}
