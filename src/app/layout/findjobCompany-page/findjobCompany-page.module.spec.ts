import { FindjobCompanyPageModule } from './findjobCompany-page.module';

describe('BlankPageModule', () => {
    let ffindjobCompanyPageModule: FindjobCompanyPageModule;

    beforeEach(() => {
        ffindjobCompanyPageModule = new FindjobCompanyPageModule();
    });

    it('should create an instance', () => {
        expect(ffindjobCompanyPageModule).toBeTruthy();
    });
});


