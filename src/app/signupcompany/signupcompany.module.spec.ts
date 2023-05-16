import { signupcompanyModule } from './signupcompany.module';

describe('SignupModule', () => {
    let SignupcompanyModule: signupcompanyModule;

    beforeEach(() => {
        SignupcompanyModule = new signupcompanyModule();
    });

    it('should create an instance', () => {
        expect(SignupcompanyModule).toBeTruthy();
    });
});
