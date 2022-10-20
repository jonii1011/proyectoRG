import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogorgComponent } from './logorg.component';

describe('LogorgComponent', () => {
  let component: LogorgComponent;
  let fixture: ComponentFixture<LogorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogorgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
