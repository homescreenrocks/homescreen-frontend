import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIconRowComponent } from './service-icon-row.component';

describe('ServiceIconRowComponent', () => {
  let component: ServiceIconRowComponent;
  let fixture: ComponentFixture<ServiceIconRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceIconRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIconRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
