import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeListComponent } from './landscape-list.component';

describe('LandscapeListComponent', () => {
  let component: LandscapeListComponent;
  let fixture: ComponentFixture<LandscapeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandscapeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
