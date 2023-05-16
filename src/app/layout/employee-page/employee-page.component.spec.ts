import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';



import { EmployeePageComponent } from './employee-page.component';

describe('BlankPageComponent', () => {
    let component: EmployeePageComponent;
    let fixture: ComponentFixture<EmployeePageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeePageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
