import TestCaseTest from './TestCaseTest';
import TestSuite from './TestSuite';
import TestResult from "./TestResult";

let suite = new TestSuite();
suite.add(new TestCaseTest('testTemplateMethod'));
suite.add(new TestCaseTest('testResult'));
suite.add(new TestCaseTest('testFailedResultFormatting'));
suite.add(new TestCaseTest('testFailedResult'));
suite.add(new TestCaseTest('testSuite'));

let result = new TestResult();
suite.run(result);
console.log(result.summary());