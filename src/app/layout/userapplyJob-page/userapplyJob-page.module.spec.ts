import { UserApplyJobPageModule } from './userapplyJob-page.module';

describe('BlankPageModule', () => {
    let uuserApplyJobPageModule: UserApplyJobPageModule;

    beforeEach(() => {
        uuserApplyJobPageModule = new UserApplyJobPageModule();
    });

    it('should create an instance', () => {
        expect(uuserApplyJobPageModule).toBeTruthy();
    });
});
