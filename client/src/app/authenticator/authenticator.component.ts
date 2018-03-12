import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.scss']
})
export class AuthenticatorComponent implements OnInit {

  constructor(private appComponent: AppComponent ) {
    this.appComponent.callNextStatus('Início');
  }

  ngOnInit() {
  }

}
