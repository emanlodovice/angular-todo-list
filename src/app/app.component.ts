import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-crash-todolist';

  constructor() {
    this.changeName('123');
  }

  changeName(name: string): void {
    this.title = name;
  }
}
