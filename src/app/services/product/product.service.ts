import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  getCategory(){
    return this.http.get('https://87a36cc3-752f-4506-8ebe-f0ab48449e24.mock.pstmn.io');
  }

  // getCategory(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/category`);
  // }

  getProducts(){
    return this.http.get('../../assets/response_1717048319445.json');
  }

  saveProduct(obj:any){
    return this.http.post('../../assets/response_1717048361658.json',obj);
  }

  updateProdcut(obj:any){
    return this.http.post('../../assets/response_1717048361658.json',obj);
  }
}

