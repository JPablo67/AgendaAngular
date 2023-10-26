import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarusuariosComponent } from './agregarusuarios.component';

describe('AgregarusuariosComponent', () => {
  let component: AgregarusuariosComponent;
  let fixture: ComponentFixture<AgregarusuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarusuariosComponent]
    });
    fixture = TestBed.createComponent(AgregarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
