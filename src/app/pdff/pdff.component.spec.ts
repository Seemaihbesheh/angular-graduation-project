import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdffComponent } from './pdff.component';

describe('PdffComponent', () => {
  let component: PdffComponent;
  let fixture: ComponentFixture<PdffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
