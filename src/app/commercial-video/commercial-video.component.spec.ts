import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialVideoComponent } from './commercial-video.component';

describe('CommercialVideoComponent', () => {
  let component: CommercialVideoComponent;
  let fixture: ComponentFixture<CommercialVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
