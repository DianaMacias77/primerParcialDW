import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesEstudianteComponent } from './publicaciones-estudiante.component';

describe('PublicacionesEstudianteComponent', () => {
  let component: PublicacionesEstudianteComponent;
  let fixture: ComponentFixture<PublicacionesEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
