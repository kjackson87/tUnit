import TestCase from './TestCase';
import TestResult from './TestResult';
import TestSuite from './TestSuite';
import WasRun from './WasRun';
import * as assert from 'assert';

export default class TestCaseTest extends TestCase {

    private result: TestResult;
    private test: WasRun;

    public setUp() {
        this.result = new TestResult();
    }

    private testTemplateMethod() {
        this.test = new WasRun('testMethod');        
        this.test.run(this.result);
        assert('setUp testMethod tearDown ' === this.test.log);
    }

    private testResult() {
        this.test = new WasRun('testMethod');
        this.test.run(this.result);
        assert('1 run, 0 failed' === this.result.summary());
    }

    private testFailedResult() {
        this.test = new WasRun('testBrokenMethod');
        this.test.run(this.result);
        assert('1 run, 1 failed' === this.result.summary());
    }

    private testFailedResultFormatting() {
        this.result.testStarted();
        this.result.testFailed();
        assert('1 run, 1 failed' === this.result.summary());
    }
    
    private testSuite() {
        let suite = new TestSuite();
        suite.add(new WasRun('testMethod'));
        suite.add(new WasRun('testBrokenMethod'));
        suite.run(this.result);
        assert('2 run, 1 failed' === this.result.summary());
    }
}
