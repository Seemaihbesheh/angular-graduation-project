import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';



import { UserApplyJobPageComponent } from './userapplyJob-page.component';

describe('UserApplyJobComponent', () => {
    let component: UserApplyJobPageComponent;
    let fixture: ComponentFixture<UserApplyJobPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UserApplyJobPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserApplyJobPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
