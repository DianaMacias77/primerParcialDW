import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeProfesorComponent } from './acerca-de-profesor.component';

describe('AcercaDeProfesorComponent', () => {
  let component: AcercaDeProfesorComponent;
  let fixture: ComponentFixture<AcercaDeProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
