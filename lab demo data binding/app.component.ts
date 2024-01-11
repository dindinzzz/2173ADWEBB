import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is a interpolated!'; //interpolation
  clientName = 'Denise'; // property binding
  appliedCSS = 'purple'; // style binding
  notAppliedCSS = false;
  myColor = 'pink';

  //EVENT BINDING
  showData($event: any) {
    console.log('Button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  clickCount = 0;
    clickMe() {
      this.clickCount++;
    }
}
