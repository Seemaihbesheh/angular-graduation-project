import { FindjobPageModule } from './findjob-page.module';

describe('BlankPageModule', () => {
    let findjobPageModule: FindjobPageModule;

    beforeEach(() => {
        findjobPageModule = new FindjobPageModule();
    });

    it('should create an instance', () => {
        expect(findjobPageModule).toBeTruthy();
    });
});

