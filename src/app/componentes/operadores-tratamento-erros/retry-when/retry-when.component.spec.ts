import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryWhenComponent } from './retry-when.component';

describe('RetryWhenComponent', () => {
  let component: RetryWhenComponent;
  let fixture: ComponentFixture<RetryWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetryWhenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetryWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
