import {Component} from '@angular/core';

@Component({
  selector: 'hotel-card',
  template: `
    <nz-card>
      <div class="hotel-card__grid">
        <div>
          <nz-carousel [nzEffect]="effect">
            <div nz-carousel-content>
              <h3>1</h3>
            </div>
          </nz-carousel>
        </div>
        <hotel-card-secao-informacoes />
        <div class="divisao"></div>
        <hotel-card-secao-valores />
      </div>
    </nz-card>
  `,
  styles: [
    `
      ::ng-deep hotel-card .ant-card-body {
        padding: 0;
        min-height: 255px;
        width: 100%;
      }
      .hotel-card__grid {
        display: grid;
        grid-template-columns: 34% 40% 0.5% 25.5%;
        min-height: 255px;
        width: 100%;
      }
      .hotel-card__grid > :first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .hotel-card__grid > :last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      .divisao {
        background-color: var(--backgroundColor);
      }
    `,
  ],
})
export class HotelCardComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
