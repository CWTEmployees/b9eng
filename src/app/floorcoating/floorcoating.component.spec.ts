import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorcoatingComponent } from './floorcoating.component';

describe('FloorcoatingComponent', () => {
  let component: FloorcoatingComponent;
  let fixture: ComponentFixture<FloorcoatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorcoatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorcoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
