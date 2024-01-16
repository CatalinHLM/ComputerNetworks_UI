import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
 buttonClicked = false;

 onButtonClick() {
  this.buttonClicked = true;
 }
}
