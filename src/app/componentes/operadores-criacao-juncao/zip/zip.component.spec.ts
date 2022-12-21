import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipComponent } from './zip.component';

describe('ZipComponent', () => {
  let component: ZipComponent;
  let fixture: ComponentFixture<ZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
