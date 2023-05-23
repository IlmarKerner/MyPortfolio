import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdProjectComponent } from './third-project.component';

describe('ThirdProjectComponent', () => {
  let component: ThirdProjectComponent;
  let fixture: ComponentFixture<ThirdProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
