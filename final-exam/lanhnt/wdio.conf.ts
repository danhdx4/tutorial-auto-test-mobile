import path, { join } from "path";

export const config: WebdriverIO.Config = {
    runner: "local",
    tsConfigPath: "./tsconfig.json",

    port: 4723,
    specs: [
        './specs/**/*.ts',
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [
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
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ["appium"],
    framework: "mocha",

    reporters: [
        "spec",
        [
            "allure",
            {
                outputDir: "allure-results",
                disableWebdriverStepsReporting: true,
                addConsoleLogs: true,
            },
        ],
    ],

    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
};
