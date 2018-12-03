import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactV2Component } from './new-contact-v2.component';

describe('NewContactV2Component', () => {
  let component: NewContactV2Component;
  let fixture: ComponentFixture<NewContactV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
