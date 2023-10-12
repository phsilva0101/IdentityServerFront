import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUnlockedComponent } from './home-unlocked.component';

describe('HomeUnlockedComponent', () => {
  let component: HomeUnlockedComponent;
  let fixture: ComponentFixture<HomeUnlockedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeUnlockedComponent]
    });
    fixture = TestBed.createComponent(HomeUnlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
