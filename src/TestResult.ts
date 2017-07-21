export default class TestResult {
    private runCount = 0;
    private errorCount = 0;
    
    public summary() {
        return `${this.runCount} run, ${this.errorCount} failed`;
    }

    public testStarted() {
        this.runCount++;
    }

    public testFailed() {
        this.errorCount++;
    }
}