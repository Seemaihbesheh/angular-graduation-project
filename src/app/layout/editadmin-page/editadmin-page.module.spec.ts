import { EditadminPageModule } from './editadmin-page.module';

describe('BlankPageModule', () => {
    let editadminPageModule: EditadminPageModule;

    beforeEach(() => {
        editadminPageModule = new EditadminPageModule();
    });

    it('should create an instance', () => {
        expect(editadminPageModule).toBeTruthy();
    });
});

