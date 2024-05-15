import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneContactsComponent } from './personne-contacts.component';

describe('PersonneContactsComponent', () => {
  let component: PersonneContactsComponent;
  let fixture: ComponentFixture<PersonneContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonneContactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonneContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
