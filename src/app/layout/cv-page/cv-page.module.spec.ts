import { CvPageModule } from './cv-page.module';

describe('BlankPageModule', () => {
    let cvkPageModule: CvPageModule;

    beforeEach(() => {
        cvkPageModule = new CvPageModule();
    });

    it('should create an instance', () => {
        expect(cvkPageModule).toBeTruthy();
    });
});
