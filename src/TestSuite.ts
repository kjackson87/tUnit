import TestCase from './TestCase';
import TestResult from './TestResult';

export default class TestSuite {
    private tests: Array<TestCase> = [];

    public add(test: TestCase) {
        this.tests.push(test);
    }

    public run(result: TestResult) {
        this.tests.forEach(test => {
            test.run(result);
        });
    }
}