import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  canControlModal : boolean = false;

  controlModalWindow(modalWindowStatus : any)
  {
    this.canControlModal = modalWindowStatus;
    console.log(this.canControlModal);
  }
}
