import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <div>The number: {{x}}</div>
    </div>
  `,
})
export class AppComponent {
  title: string = 'Working component!';
  x: number = 123;

  constructor(private http: HttpClient){
    console.log(http);
  }
}
