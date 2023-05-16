import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';



import { CompanyPageComponent } from './company-page.component';

describe('BlankPageComponent', () => {
    let component: CompanyPageComponent;
    let fixture: ComponentFixture<CompanyPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CompanyPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
