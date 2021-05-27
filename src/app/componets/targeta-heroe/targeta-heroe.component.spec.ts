import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaHeroeComponent } from './targeta-heroe.component';

describe('TargetaHeroeComponent', () => {
  let component: TargetaHeroeComponent;
  let fixture: ComponentFixture<TargetaHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetaHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetaHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
