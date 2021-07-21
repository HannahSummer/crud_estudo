import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
 {{name}}

 o valor da soma é {{somar(8,3)}}
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'frontend';
  name = 'Hannah'
  somar(a: number, b: number) {
    return a + b
  }
}
