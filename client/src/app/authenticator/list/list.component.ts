import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ListService } from "./list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns = ['identifier', 'nome', 'email', 'actions'];
  dataSource = [];

  noResults$ = true;

  constructor(private appComponent: AppComponent, private _listUser: ListService, private _router:Router ) {
    this.appComponent.callNextStatus('Lista de usuários');
    this.listUsers();
  }

  ngOnInit() {}

  private listUsers(){
    this._listUser.listUser().subscribe(suc=>{
      this.dataSource = suc;
      this.noResults$ = this.dataSource.length === 0 ;
    });
  }

  editar(id){
    this._router.navigate(['/authenticator/edit', id]);
  }

  newHash(id){
    this._router.navigate(['/authenticator/renew', id]);
  }

  validateOTP(id){
    this._router.navigate(['/authenticator/validate', id]);
  }

  excluir(id){
    this._listUser.removerUser(id).subscribe(suc=>{
      this.listUsers();
    })
  }

}
