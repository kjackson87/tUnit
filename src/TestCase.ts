import TestResult from './TestResult';
import * as assert from 'assert';

export default class TestCase {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public setUp() {
        // nothing
    }

    public run(result: TestResult) {
        result.testStarted();
        this.setUp();
        try {
            let context: any = this;
            context[this.name]();
        } catch (e) {
            result.testFailed();
        }
        this.tearDown();
    }

    public tearDown() {
        // nothing
    }
}
