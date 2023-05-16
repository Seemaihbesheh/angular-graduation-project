import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';



import { postComponent } from './post.component';

describe('BlankPageComponent', () => {
    let component: postComponent;
    let fixture: ComponentFixture<postComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [postComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(postComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
