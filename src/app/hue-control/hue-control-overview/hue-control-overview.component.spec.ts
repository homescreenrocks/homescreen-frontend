import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HueControlOverviewComponent } from './hue-control-overview.component';

describe('HueControlOverviewComponent', () => {
  let component: HueControlOverviewComponent;
  let fixture: ComponentFixture<HueControlOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HueControlOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HueControlOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
