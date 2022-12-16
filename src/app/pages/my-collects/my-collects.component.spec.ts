import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCollectsComponent } from './my-collects.component';

describe('MyCollectsComponent', () => {
  let component: MyCollectsComponent;
  let fixture: ComponentFixture<MyCollectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCollectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
