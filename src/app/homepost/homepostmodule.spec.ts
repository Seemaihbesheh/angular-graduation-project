import { homepostModule } from './homepost.module'

describe('FormModule', () => {
    let formModule: homepostModule;

    beforeEach(() => {
        formModule = new homepostModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
