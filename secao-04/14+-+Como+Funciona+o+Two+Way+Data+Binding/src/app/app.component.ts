import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Felipe';

  handleInputChange(event: string) {
    console.log(event);

    //...

    this.name = event.toUpperCase();
  }
}
