import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarusuariosComponent } from './editarusuarios.component';

describe('EditarusuariosComponent', () => {
  let component: EditarusuariosComponent;
  let fixture: ComponentFixture<EditarusuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarusuariosComponent]
    });
    fixture = TestBed.createComponent(EditarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
