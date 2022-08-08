import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalsDetailsComponent } from './technicals-details.component';

describe('TechnicalsDetailsComponent', () => {
  let component: TechnicalsDetailsComponent;
  let fixture: ComponentFixture<TechnicalsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
