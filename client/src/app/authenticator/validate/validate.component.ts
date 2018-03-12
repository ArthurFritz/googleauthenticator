import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  constructor(private appComponent: AppComponent ) {
    this.appComponent.callNextStatus('Validar Token');
  }

  ngOnInit() {
  }

}
