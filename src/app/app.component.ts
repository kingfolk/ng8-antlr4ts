import { Component } from '@angular/core';
import * as antlr4 from 'antlr4ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'antlr4ts-test';

  constructor() {
    console.log('antlr4', antlr4);
  }
}
