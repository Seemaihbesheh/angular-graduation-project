import { CompanytablePageModule } from './companytable-page.module';

describe('BlankPageModule', () => {
    let ccompanytable: CompanytablePageModule;

    beforeEach(() => {
        ccompanytable = new CompanytablePageModule();
    });

    it('should create an instance', () => {
        expect(ccompanytable).toBeTruthy();
    });
});

