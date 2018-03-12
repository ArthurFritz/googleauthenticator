import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private appComponent: AppComponent ) {
    this.appComponent.callNextStatus('Criar usuário');
  }

  ngOnInit() {
  }

}
