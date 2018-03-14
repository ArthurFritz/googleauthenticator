import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class ValidateService {

  constructor(private _httpCliente: HttpClient) { }
  
  private _path = 'usuarios';
  private _pathValidate = 'authenticator/validate';

  carregar(id){
    return this._httpCliente.get<any>(environment.baseUrl + this._path + '/' + id);
  }

  validate(info){
    return this._httpCliente.post(environment.baseUrl + this._pathValidate, info);
  }

}
