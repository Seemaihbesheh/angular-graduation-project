import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { EmailForgetpasswordComponent } from './emailForgetpassword.component';
import { EmailForgetpasswordModule } from './emailForgetpassword.module';

describe('EmailForgetpasswordComponent', () => {
    let component: EmailForgetpasswordComponent;
    let fixture: ComponentFixture<EmailForgetpasswordComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [EmailForgetpasswordModule, RouterTestingModule, BrowserAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmailForgetpasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
