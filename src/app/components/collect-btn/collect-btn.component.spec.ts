import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectBtnComponent } from './collect-btn.component';

describe('CollectBtnComponent', () => {
  let component: CollectBtnComponent;
  let fixture: ComponentFixture<CollectBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
