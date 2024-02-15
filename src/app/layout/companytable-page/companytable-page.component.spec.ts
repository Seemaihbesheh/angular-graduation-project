import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';



import { CompanytablePageComponent } from './companytable-page.component';

describe('CompanytablePageComponent', () => {
    let component: CompanytablePageComponent;
    let fixture: ComponentFixture<CompanytablePageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CompanytablePageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompanytablePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
