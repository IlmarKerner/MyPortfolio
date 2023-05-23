import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthProjectComponent } from './fourth-project.component';

describe('FourthProjectComponent', () => {
  let component: FourthProjectComponent;
  let fixture: ComponentFixture<FourthProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
