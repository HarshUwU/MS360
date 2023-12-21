import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadrComponent } from './dashboard.component';

describe('DashboadrComponent', () => {
  let component: DashboadrComponent;
  let fixture: ComponentFixture<DashboadrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboadrComponent]
    });
    fixture = TestBed.createComponent(DashboadrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
