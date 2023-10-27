import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmeraldComponent } from './emerald.component';

describe('EmeraldComponent', () => {
  let component: EmeraldComponent;
  let fixture: ComponentFixture<EmeraldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmeraldComponent]
    });
    fixture = TestBed.createComponent(EmeraldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
