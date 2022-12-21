import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeComponent } from './debounce-time.component';

describe('DebounceTimeComponent', () => {
  let component: DebounceTimeComponent;
  let fixture: ComponentFixture<DebounceTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
