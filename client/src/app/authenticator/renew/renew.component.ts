import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router, ActivatedRoute } from "@angular/router";
import { RenewService } from "./renew.service";

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.scss']
})
export class RenewComponent implements OnInit {

  private idUser;
  public infoUser = {};

  constructor(private appComponent: AppComponent, 
              private _activateRoute:ActivatedRoute,
              private _router:Router,
              private _renewService:RenewService
             ) {
    this.appComponent.callNextStatus('Criar/Atualizar Hash');
    this.idUser = null;    
    this._activateRoute.params.subscribe(params=>{
      this.idUser = params['identifier'];
      this._renewService.carregar(this.idUser).subscribe(suc=>{
        if(suc){
          this.infoUser = suc;
        }else{
          this._router.navigate(['/authenticator/list'])    
        }
      });
    }, err=>{
      this._router.navigate(['/authenticator/list'])
    });
  }

  ngOnInit() {
  }

  validarOtp(){
    this._router.navigate(['/authenticator/validate', this.idUser])
  }

}
