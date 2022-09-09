import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Llegar tarde', url: '/folder/Llegar tarde',},
    { title: 'Cambio de prueba', url: '/folder/Cambio de prueba',},
    { title: 'Cancelar clases', url: '/folder/Cancelar clases',},
  ];
  
}
