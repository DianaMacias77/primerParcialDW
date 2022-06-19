import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosProfesorComponent } from './contactanos-profesor.component';

describe('ContactanosProfesorComponent', () => {
  let component: ContactanosProfesorComponent;
  let fixture: ComponentFixture<ContactanosProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactanosProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
