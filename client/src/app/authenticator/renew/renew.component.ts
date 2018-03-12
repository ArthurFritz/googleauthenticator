import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.scss']
})
export class RenewComponent implements OnInit {

  constructor(private appComponent: AppComponent ) {
    this.appComponent.callNextStatus('Criar novo hash');
  }

  ngOnInit() {
  }

}
