import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  colorsUno: any={};
  colorsDos: any={};
  info: any=[];
  cargada: boolean;  

  constructor(private http:HttpClient) {
    this.cargada = false;
    
    http.get("https://reqres.in/api/colors")
    .subscribe(resp => {
      this.colorsUno = resp;
      this.colorsUno.data.forEach((item) => {
        this.info.push(item);
      })
    })
    http.get("https://reqres.in/api/colors?page=2")
    .subscribe(response => {
      this.colorsDos = response; 
      this.colorsDos.data.forEach((items) => {
        this.info.push(items);
      })
    })
    
    
    
  }
}
