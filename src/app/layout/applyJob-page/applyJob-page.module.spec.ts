import { ApplyJobPageModule } from './applyJob-page.module';

describe('BlankPageModule', () => {
    let applyJobPageModule: ApplyJobPageModule;

    beforeEach(() => {
        applyJobPageModule = new ApplyJobPageModule();
    });

    it('should create an instance', () => {
        expect(applyJobPageModule).toBeTruthy();
    });
});
