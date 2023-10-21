import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSedesComponent } from './buscar-sedes.component';

describe('BuscarSedesComponent', () => {
  let component: BuscarSedesComponent;
  let fixture: ComponentFixture<BuscarSedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarSedesComponent]
    });
    fixture = TestBed.createComponent(BuscarSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
