import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormEnrermEnreComponent } from './login-form-enrerm-enre.component';

describe('LoginFormEnrermEnreComponent', () => {
  let component: LoginFormEnrermEnreComponent;
  let fixture: ComponentFixture<LoginFormEnrermEnreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormEnrermEnreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginFormEnrermEnreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
