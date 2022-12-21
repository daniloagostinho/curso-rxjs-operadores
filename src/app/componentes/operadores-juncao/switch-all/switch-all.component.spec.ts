import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchAllComponent } from './switch-all.component';

describe('SwitchAllComponent', () => {
  let component: SwitchAllComponent;
  let fixture: ComponentFixture<SwitchAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
