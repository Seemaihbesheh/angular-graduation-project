import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';



import { EditemployeePageComponent } from './editemployee-page.component';

describe('EditemployeePageComponent', () => {
    let component: EditemployeePageComponent;
    let fixture: ComponentFixture<EditemployeePageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditemployeePageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditemployeePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
