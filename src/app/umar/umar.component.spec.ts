import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmarComponent } from './umar.component';

describe('UmarComponent', () => {
  let component: UmarComponent;
  let fixture: ComponentFixture<UmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
