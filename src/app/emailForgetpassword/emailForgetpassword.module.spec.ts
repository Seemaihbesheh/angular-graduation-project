import {EmailForgetpasswordModule } from './emailForgetpassword.module';

describe('EmailForgetpasswordModule', () => {
    let eEmailForgetpasswordModule: EmailForgetpasswordModule;

    beforeEach(() => {
        eEmailForgetpasswordModule = new EmailForgetpasswordModule();
    });

    it('should create an instance', () => {
        expect(eEmailForgetpasswordModule).toBeTruthy();
    });
});

