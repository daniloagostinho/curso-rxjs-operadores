import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryComponent } from './every.component';

describe('EveryComponent', () => {
  let component: EveryComponent;
  let fixture: ComponentFixture<EveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
