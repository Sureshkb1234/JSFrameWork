const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000/start-kent-access-permit',
      show: true,
      "chrome": {
        "ignoreHTTPSErrors": true
      }
    }
  
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./StepDefs.js']
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  name: 'Test',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}