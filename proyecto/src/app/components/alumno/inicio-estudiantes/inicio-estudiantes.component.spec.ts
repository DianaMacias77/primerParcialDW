import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEstudiantesComponent } from './inicio-estudiantes.component';

describe('InicioEstudiantesComponent', () => {
  let component: InicioEstudiantesComponent;
  let fixture: ComponentFixture<InicioEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
