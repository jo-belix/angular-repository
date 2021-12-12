import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyLibComponent } from './family-lib.component';

describe('FamilyLibComponent', () => {
  let component: FamilyLibComponent;
  let fixture: ComponentFixture<FamilyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
