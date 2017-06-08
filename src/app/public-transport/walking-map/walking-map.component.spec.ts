import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingMapComponent } from './walking-map.component';

describe('WalkingMapComponent', () => {
  let component: WalkingMapComponent;
  let fixture: ComponentFixture<WalkingMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
