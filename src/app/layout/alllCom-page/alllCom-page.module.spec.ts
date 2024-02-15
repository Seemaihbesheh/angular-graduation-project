import {  AlllComPageModule } from './alllCom-page.module';

describe('AlllComPageModule', () => {
    let alllCommPageModule:  AlllComPageModule;

    beforeEach(() => {
        alllCommPageModule = new  AlllComPageModule();
    });

    it('should create an instance', () => {
        expect(alllCommPageModule).toBeTruthy();
    });
});
