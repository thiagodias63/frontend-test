import {NgModule} from '@angular/core';
import {BreadcrumbComponent} from './breadcrumb.component';
import {CommonModule} from '@angular/common';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  imports: [CommonModule, NzBreadCrumbModule],
})
export class BreadcrumbModule {}
