import path, { join } from "path";

export const config: WebdriverIO.Config = {

  runner: "local",
  tsConfigPath: "./tsconfig.json",

  port: 4723,

  specs: [
    './test/specs/**/*.ts',
    // 'test/specs/example.spec.ts'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,

  capabilities: [
    // {
    //   platformName: "Android",
    //   "appium:deviceName": "Pixel 4",
    //   "appium:platformVersion": "12.0",
    //   "appium:automationName": "UiAutomator2",
    //   "appium:app": path.join(process.cwd(), "app/android/ApiDemos-debug.apk"),
    // },
    // {
    //   platformName: "Android",
    //   "appium:deviceName": "Pixel 4",
    //   "appium:platformVersion": "12.0",
    //   "appium:automationName": "UiAutomator2",
    //   "appium:appPackage": "io.appium.android.apis",
    //   "appium:appActivity": ".ApiDemos",
    // },
    // {
    //   platformName: "Android",
    //   "appium:deviceName": "Pixel 4",
    //   "appium:platformVersion": "12.0",
    //   "appium:automationName": "UiAutomator2",
    //   "appium:app": join(process.cwd(), "app", "android", "ColorNote+Notepad.apk"),
    //   "appium:autoGrantPermissions": true,
    // },
    // {
    //   platformName: "Android",
    //   "appium:deviceName": "Pixel 4",
    //   "appium:platformVersion": "12.0",
    //   "appium:automationName": "UiAutomator2",
    //   "appium:appPackage": "io.appium.android.apis",
    //   "appium:appActivity": ".apiDemos",
    // },
    {
      platformName: "Android",
      "appium:deviceName": "Pixel 4",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": join(process.cwd(), "app", "android", "android.wdio.native.app.v2.2.0.apk"),
      "appium:autoGrantPermissions": true,
      // "appium:chromedriverExecutable": join(process.cwd(), "webview", "mac", "chromedriver"), // config for mac
      "appium:chromedriverExecutable": join(process.cwd(), "webview", "win", "chromedriver.exe"), // config for win
    },
  ],

  logLevel: "info",

  bail: 0,

  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  services: ["appium"],

  framework: "mocha",

  // reporters: ["spec"],
  reporters: ["spec",
    // ["allure", { outputDir: "allure-results" }]
  ],
  // reporters: ["spec", [
  //   "allure",
  //   {
  //     outputDir: "./allure-results",
  //     disableWebdriverScreenshotsReporting: false,
  //     disableWebdriverStepsReporting: true, // Không report WebdriverIO commands
  //     addConsoleLogs: true // Add Consolog into allure report
  //   },
  // ]],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  // afterTest: function(test, context, { error, result, duration, passed, retries }) {
  // },
  // afterTest: async function (test, context, result) {
  //   if (result.error) {
  //     await browser.takeScreenshot()
  //   }
  // }
};
