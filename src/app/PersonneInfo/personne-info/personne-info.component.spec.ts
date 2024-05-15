import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneInfoComponent } from './personne-info.component';

describe('PersonneInfoComponent', () => {
  let component: PersonneInfoComponent;
  let fixture: ComponentFixture<PersonneInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonneInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
