import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesProfesorComponent } from './publicaciones-profesor.component';

describe('PublicacionesProfesorComponent', () => {
  let component: PublicacionesProfesorComponent;
  let fixture: ComponentFixture<PublicacionesProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
