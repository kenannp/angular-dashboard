import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalAccountProgramsComponent } from './national-account-programs.component';

describe('NationalAccountProgramsComponent', () => {
  let component: NationalAccountProgramsComponent;
  let fixture: ComponentFixture<NationalAccountProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalAccountProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalAccountProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
