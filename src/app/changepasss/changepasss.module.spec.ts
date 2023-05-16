import {ResetModule } from './changepasss.module';

describe('ResetModule', () => {
    let resetModule: ResetModule;

    beforeEach(() => {
        resetModule = new ResetModule();
    });

    it('should create an instance', () => {
        expect(resetModule).toBeTruthy();
    });
});

