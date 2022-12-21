import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeConcatComponent } from './merge-concat.component';

describe('MergeConcatComponent', () => {
  let component: MergeConcatComponent;
  let fixture: ComponentFixture<MergeConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeConcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
