import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClincComponent } from './clinc.component';

describe('ClincComponent', () => {
  let component: ClincComponent;
  let fixture: ComponentFixture<ClincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClincComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
