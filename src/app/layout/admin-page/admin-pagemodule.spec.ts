import { AdminPageModule } from './admin-page.module';

describe('AdminPageModule', () => {
    let adminPageModule: AdminPageModule;

    beforeEach(() => {
        adminPageModule = new AdminPageModule();
    });

    it('should create an instance', () => {
        expect(adminPageModule).toBeTruthy();
    });
});
