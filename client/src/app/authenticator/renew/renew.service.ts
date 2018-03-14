import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class RenewService {

  constructor(private _httpCliente: HttpClient) { }
  
  private _path = 'usuarios';
  private _pathRenew = '/authenticator/new/';
  carregar(id){
    return this._httpCliente.get<any>(environment.baseUrl + this._path + '/' + id);
  }

  renewHash(id){
    return this._httpCliente.put(environment.baseUrl + this._pathRenew + id, {}, {responseType:'text'});
  }

}
