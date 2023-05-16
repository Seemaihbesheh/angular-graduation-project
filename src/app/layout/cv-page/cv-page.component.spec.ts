import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CvPageComponent } from './cv-page.component';

describe('BlankPageComponent', () => {
    let component: CvPageComponent;
    let fixture: ComponentFixture<CvPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CvPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CvPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
