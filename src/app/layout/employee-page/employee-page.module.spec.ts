import { EmployeePageModule } from './employee-page.module';

describe('BlankPageModule', () => {
    let employeePage: EmployeePageModule;

    beforeEach(() => {
        employeePage = new EmployeePageModule();
    });

    it('should create an instance', () => {
        expect(employeePage).toBeTruthy();
    });
});
