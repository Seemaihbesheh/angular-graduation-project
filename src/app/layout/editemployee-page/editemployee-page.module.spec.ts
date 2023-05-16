import { EditemployeePageModule } from './editemployee-page.module';

describe('editemployeePageModule', () => {
    let editemployeePageModule: EditemployeePageModule;

    beforeEach(() => {
        editemployeePageModule = new EditemployeePageModule();
    });

    it('should create an instance', () => {
        expect(editemployeePageModule).toBeTruthy();
    });
});
