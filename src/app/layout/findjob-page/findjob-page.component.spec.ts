import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';



import { FindjobPageComponent } from './findjob-page.component';

describe('BlankPageComponent', () => {
    let component: FindjobPageComponent;
    let fixture: ComponentFixture<FindjobPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FindjobPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FindjobPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
