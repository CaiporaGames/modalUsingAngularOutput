import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent 
{
  @Output() controlModal = new EventEmitter<boolean>(false);
  canControlModal : boolean = true;

  public controlModalWindow()
  {
    this.canControlModal = !this.canControlModal;
    this.controlModal.emit(this.canControlModal);
  }
}
