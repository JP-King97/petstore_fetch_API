module.exports = {
    preset:`ts-jest`,
    testMatch: [`**/*.test.ts`],
    reporters: [
        "default",
        ["jest-html-reporter", {
          pageTitle: "Test Report",
          outputPath: "./test-results/index.html",
          includeFailureMsg: true,
          includeSuiteFailure: true
        }]
      ],
}