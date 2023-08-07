import {Component} from '@angular/core';

@Component({
  selector: 'breadcrumb',
  template: ` <div class="breadcrumb__container">
    <nz-breadcrumb nzSeparator=">">
      <nz-breadcrumb-item>Início</nz-breadcrumb-item>
      <nz-breadcrumb-item>
        <a>Hotéis</a>
      </nz-breadcrumb-item>
    </nz-breadcrumb>
  </div>`,
  styles: [
    `
      .breadcrumb__container {
        margin: 1rem 0;
        color: ;
      }
      ::ng-deep .ant-breadcrumb-link {
        color: var(--primaryColor);
      }
      ::ng-deep .ant-breadcrumb-link > a {
        color: var(--secondaryColor);
      }
    `,
  ],
})
export class BreadcrumbComponent {}
