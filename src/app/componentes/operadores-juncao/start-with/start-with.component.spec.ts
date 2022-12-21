import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWithComponent } from './start-with.component';

describe('StartWithComponent', () => {
  let component: StartWithComponent;
  let fixture: ComponentFixture<StartWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
