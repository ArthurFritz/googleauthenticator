import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NewService } from "./new.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {


  formulario:FormGroup;
  private idUserUpdate=null;

  constructor(private appComponent: AppComponent, private _fb:FormBuilder, private _newService:NewService, private _router:Router,  private _activateRoute: ActivatedRoute ) {
    this.formulario = this._fb.group({
      "email" : [null, Validators.compose([Validators.required, Validators.email])],
      "nome" : [null, Validators.compose([Validators.required, Validators.minLength(1)])]
    })
  }

  ngOnInit() {
    this.idUserUpdate = null;    
    this._activateRoute.params.subscribe(params=>{
      this.idUserUpdate = params['identifier'];
    });
    if(this.idUserUpdate){
      this.appComponent.callNextStatus('Editar usuário');
      this._newService.carregar(this.idUserUpdate).subscribe(suc=>{
        this.formulario.get('email').setValue(suc.email);
        this.formulario.get('nome').setValue(suc.nome);
      });
    }else{
      this.appComponent.callNextStatus('Novo usuário');
    }
  }

  salvar(){
    if(this.formulario.valid){
      let user = this.formulario.value;
      if(this.idUserUpdate){
        user.id = this.idUserUpdate;
      }
      this._newService.updateOrAddUser(user).subscribe(suc=>{
        this._router.navigate(['/authenticator/list']);
      })
    }
  }

}
