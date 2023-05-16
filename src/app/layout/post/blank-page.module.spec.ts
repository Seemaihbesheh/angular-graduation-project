import { createCVModule } from './createCV.module';

describe('BlankPageModule', () => {
    let blankPageModule: createCVModule;

    beforeEach(() => {
        blankPageModule = new createCVModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
