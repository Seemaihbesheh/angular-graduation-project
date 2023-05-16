import { AddcompanyPageModule } from './addcompany-page.module';

describe('AddcompanyPageModule', () => {
    let addcompanyPageModule: AddcompanyPageModule;

    beforeEach(() => {
        addcompanyPageModule = new AddcompanyPageModule();
    });

    it('should create an instance', () => {
        expect(addcompanyPageModule).toBeTruthy();
    });
});
