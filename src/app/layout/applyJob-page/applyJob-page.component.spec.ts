import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';



import { ApplyJobPageComponent } from './applyJob-page.component';

describe('BlankPageComponent', () => {
    let component: ApplyJobPageComponent;
    let fixture: ComponentFixture<ApplyJobPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ApplyJobPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ApplyJobPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
