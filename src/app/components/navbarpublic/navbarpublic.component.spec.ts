import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpublicComponent } from './navbarpublic.component';

describe('NavbarpublicComponent', () => {
  let component: NavbarpublicComponent;
  let fixture: ComponentFixture<NavbarpublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarpublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
