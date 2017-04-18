/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PublicTransportComponent } from './public-transport.component';

describe('PublicTransportComponent', () => {
  let component: PublicTransportComponent;
  let fixture: ComponentFixture<PublicTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
