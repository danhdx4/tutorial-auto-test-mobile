import { join } from "path";

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
            pageLoadStrategy: "eager",
            "appium:deviceName": "Pixel 4",
            "appium:platformVersion": "12.0",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(process.cwd(), "app", "android", "android.wdio.native.app.v2.2.0.apk"),
            "appium:autoGrantPermissions": true,
            "appium:showChromedriverLog": true,
            "appium:adbExecTimeout": 60000
        },
    ],

    logLevel: "info",
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 180000,
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
        timeout: 900000,
    },
};
