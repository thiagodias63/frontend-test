import {TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let fixture;
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
