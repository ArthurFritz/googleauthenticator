import { Component } from '@angular/core';
import { RouterState, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public titlePage = '';
  private statusPage = new Subject<string>();
  constructor(private _router: Router) {
    this.statusPage.subscribe(suc => {
      this.titlePage = suc;
    });
    this.callNextStatus('Início');
  }

  public callNextStatus(titulo: string) {
    const projTitle = 'Projeto - ' + titulo;
    this.statusPage.next(projTitle);
  }
}
