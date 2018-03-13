import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ValidateService } from "./validate.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  
  formulario:FormGroup;
  private idUser=null;
  infoUser = {};

  constructor(private appComponent: AppComponent, private _fb:FormBuilder, private _validateService:ValidateService, private _router:Router , private _activateRoute: ActivatedRoute ) {
    this.appComponent.callNextStatus('Validar Token');
    this.idUser = null;    
    this._activateRoute.params.subscribe(params=>{
      this.idUser = params['identifier'];
      this._validateService.carregar(this.idUser).subscribe(suc=>{
        if(suc){
          this.infoUser = suc;
        }else{
          this._router.navigate(['/authenticator/list'])    
        }
      });
    }, err=>{
      this._router.navigate(['/authenticator/list'])
    });
    this.formulario = this._fb.group({
      "otp" : [null, Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(6)])]
    })
  }

  ngOnInit() {}

}
