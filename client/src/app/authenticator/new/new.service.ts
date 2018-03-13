import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class NewService {

  constructor(private _httpCliente: HttpClient) { }
  
  private _path = 'usuarios';

  addUser(user){
    return this._httpCliente.post<Array<any>>(environment.baseUrl + this._path, user);
  }

  updateUser(user){
    return this._httpCliente.put<Array<any>>(environment.baseUrl + this._path + '/' + user.id, user);
  }

  carregar(id){
    return this._httpCliente.get<any>(environment.baseUrl + this._path + '/' + id);
  }

  updateOrAddUser(user){
    if(user.id){
      return this.updateUser(user);
    }
    return this.addUser(user);
  }

}
