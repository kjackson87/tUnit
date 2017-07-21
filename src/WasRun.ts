import TestCase from './TestCase';

export default class WasRun extends TestCase {
    public log = '';

    public testMethod() {
        this.log = this.log + 'testMethod ';
    }

    public testBrokenMethod() {
        throw 'broken method!';
    }

    public setUp() {
        this.log = 'setUp ';
    }

    public tearDown() {
        this.log = this.log + 'tearDown ';
    }
}
