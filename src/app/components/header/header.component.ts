import {Component} from '@angular/core';

@Component({
  selector: 'onfly-header',
  template: `<header class="header__container">
    <img src="assets/OnflyLogo.png" class="header__logo" />
  </header> `,
  styles: [
    `
      .header__container {
        background-color: white;
        -webkit-box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 1);
        -moz-box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 1);
        box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 1);
        padding: 2px 50px 6px;
        margin-bottom: 2rem;
      }
      .header__logo {
        width: 190px;
        height: 47px;
      }
    `,
  ],
})
export class HeaderComponent {}
