import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldLoginComponent } from './should-login.component';

describe('ShouldLoginComponent', () => {
  let component: ShouldLoginComponent;
  let fixture: ComponentFixture<ShouldLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShouldLoginComponent]
    });
    fixture = TestBed.createComponent(ShouldLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
