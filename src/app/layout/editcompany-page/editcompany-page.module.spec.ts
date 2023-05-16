import { EditcompanyPageModule } from './editcompany-page.module';

describe('EditcompanyPageModule', () => {
    let editcompanyPageModule: EditcompanyPageModule;

    beforeEach(() => {
        editcompanyPageModule = new EditcompanyPageModule();
    });

    it('should create an instance', () => {
        expect(editcompanyPageModule).toBeTruthy();
    });
});
