import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns = ['identifier', 'nome', 'email', 'actions'];
  dataSource = [
    {identifier: 1, email: 'Hydrogen', nome: 'José'},
    {identifier: 2, email: 'Helium', nome: 'José'},
    {identifier: 3, email: 'Lithium', nome: 'José'},
    {identifier: 4, email: 'Beryllium', nome: 'José'},
    {identifier: 5, email: 'Boron', nome: 'José'},
    {identifier: 6, email: 'Carbon', nome: 'José'},
    {identifier: 7, email: 'Nitrogen', nome: 'José'},
    {identifier: 8, email: 'Oxygen', nome: 'José'},
    {identifier: 9, email: 'Fluorine', nome: 'José'},
    {identifier: 10, email: 'Neon', nome: 'José'},
    {identifier: 11, email: 'Sodium', nome: 'José'},
    {identifier: 12, email: 'Magnesium', nome: 'José'},
    {identifier: 13, email: 'Aluminum', nome: 'José'},
    {identifier: 14, email: 'Silicon', nome: 'José'},
    {identifier: 15, email: 'Phosphorus', nome: 'José'},
    {identifier: 16, email: 'Sulfur', nome: 'José'},
    {identifier: 17, email: 'Chlorine', nome: 'José'},
    {identifier: 18, email: 'Argon', nome: 'José'},
    {identifier: 19, email: 'Potassium', nome: 'José'},
    {identifier: 20, email: 'Calcium', nome: 'José'},
  ];

  constructor(private appComponent: AppComponent ) {
    this.appComponent.callNextStatus('Lista de usuários');
  }

  ngOnInit() {
  }

}
