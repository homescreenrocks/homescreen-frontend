import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureSearchComponent } from './departure-search.component';

describe('DepartureSearchComponent', () => {
  let component: DepartureSearchComponent;
  let fixture: ComponentFixture<DepartureSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartureSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartureSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
