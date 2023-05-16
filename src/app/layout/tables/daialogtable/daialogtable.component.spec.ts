import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaialogtableComponent } from './daialogtable.component';

describe('DaialogtableComponent', () => {
  let component: DaialogtableComponent;
  let fixture: ComponentFixture<DaialogtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaialogtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaialogtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
