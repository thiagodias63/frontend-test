import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {BreadcrumbComponent} from './breadcrumb.component';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';

describe('BreadcrumbComponent', () => {
  let fixture;
  let component: BreadcrumbComponent;
  let store: Store<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzBreadCrumbModule, StoreModule.forRoot(appReducer)],
      declarations: [BreadcrumbComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
