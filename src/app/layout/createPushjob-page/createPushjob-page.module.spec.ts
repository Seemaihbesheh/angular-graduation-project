import { CreatePushjobPageModule } from './createPushjob-page.module';

describe('CreatePushjobPageModule', () => {
    let createPushjobPageModule: CreatePushjobPageModule;

    beforeEach(() => {
        createPushjobPageModule = new CreatePushjobPageModule();
    });

    it('should create an instance', () => {
        expect(createPushjobPageModule).toBeTruthy();
    });
});
