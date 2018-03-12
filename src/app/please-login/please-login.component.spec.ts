import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseLoginComponent } from './please-login.component';

describe('PleaseLoginComponent', () => {
  let component: PleaseLoginComponent;
  let fixture: ComponentFixture<PleaseLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PleaseLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PleaseLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
