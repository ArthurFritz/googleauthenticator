import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class ListService {

  constructor(private _httpCliente: HttpClient) { }
  
  private _path = 'usuarios';

  listUser(){
    return this._httpCliente.get<Array<any>>(environment.baseUrl + this._path);
  }

  removerUser(id){
    return this._httpCliente.delete(environment.baseUrl + this._path + '/' + id);
  }
}
