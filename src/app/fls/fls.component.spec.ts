import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlsComponent } from './fls.component';

describe('FlsComponent', () => {
  let component: FlsComponent;
  let fixture: ComponentFixture<FlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
