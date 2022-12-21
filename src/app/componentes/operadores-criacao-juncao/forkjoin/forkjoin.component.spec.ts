import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinComponent } from './forkjoin.component';

describe('ForkjoinComponent', () => {
  let component: ForkjoinComponent;
  let fixture: ComponentFixture<ForkjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkjoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
