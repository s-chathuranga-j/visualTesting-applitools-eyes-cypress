/// <reference types="@applitools/eyes-cypress" />
describe('Visual Grid Runner Test', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'NOP Commerce Visual Grid',
            browser: {width: 800, height: 600},
            testConcurrency: 5,
            browser: [
                {width: 800, height: 600, name: 'firefox'},
                {width: 800, height: 600, name: 'chrome'},
                {width: 800, height: 600, name: 'safari'},
                {deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome'},
                {iosDeviceInfo: {deviceName: 'iPhone XR', screenOrientation: 'portrait', iosVersion: 'latest'}},
                {iosDeviceInfo: {deviceName: 'Galaxy A5', screenOrientation: 'portrait'}}
            ]
        });
    });

    afterEach(() => {
        cy.eyesClose();
    })

    it('should run tests on visual grid successfully', function () {
        cy.visit("https://www.nopcommerce.com");
        cy.eyesCheckWindow({tag: 'Visual Grid Dashboard', fully: true, target:'window'})
    });
})