import { CompanyPageModule } from './company-page.module';

describe('BlankPageModule', () => {
    let companyPageModule: CompanyPageModule;

    beforeEach(() => {
        companyPageModule = new CompanyPageModule();
    });

    it('should create an instance', () => {
        expect(companyPageModule).toBeTruthy();
    });
});
