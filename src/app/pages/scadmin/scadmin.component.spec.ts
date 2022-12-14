import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScadminComponent } from './scadmin.component';

describe('ScadminComponent', () => {
  let component: ScadminComponent;
  let fixture: ComponentFixture<ScadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
