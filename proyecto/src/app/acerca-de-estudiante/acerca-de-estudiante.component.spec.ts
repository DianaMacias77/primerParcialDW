import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeEstudianteComponent } from './acerca-de-estudiante.component';

describe('AcercaDeEstudianteComponent', () => {
  let component: AcercaDeEstudianteComponent;
  let fixture: ComponentFixture<AcercaDeEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
