import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';



import {FindjobCompanyPageComponent } from './findjobCompany-page.component';

describe('FindjobCompanyPageComponent', () => {
    let component: FindjobCompanyPageComponent;
    let fixture: ComponentFixture<FindjobCompanyPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FindjobCompanyPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FindjobCompanyPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
