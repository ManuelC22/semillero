import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicCalculator';
  typeCalculator:number=1;


  getValue() {
    console.log(this.typeCalculator);
  }
}
