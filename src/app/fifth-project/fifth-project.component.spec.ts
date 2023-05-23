import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthProjectComponent } from './fifth-project.component';

describe('FifthProjectComponent', () => {
  let component: FifthProjectComponent;
  let fixture: ComponentFixture<FifthProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
