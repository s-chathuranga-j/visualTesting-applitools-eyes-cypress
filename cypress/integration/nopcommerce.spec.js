/// <reference types="@applitools/eyes-cypress" />
describe('Visual tests using Applitools Eyes', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'NOP Commerce',
            browser: {width: 1024, height: 800}
        });
    });

    afterEach(() => {
        //cy.eyesClose();
    })

    // default visual test
    it('should pass the visual test on NOP Commerce Dashboard page', function () {
        cy.visit("https://www.nopcommerce.com");
        cy.eyesCheckWindow({tag: 'Dashboard page', useDom: true, sendDom: true});
    });

    //execute visual test with layout mode for the whole page
    it('should pass the visual test on NOP Commerce Dashboard with layout mode', function () {
        cy.visit("https://www.nopcommerce.com");
        cy.eyesCheckWindow({tag: 'Dashboard page', matchLevel: 'Layout'})
    });

    // execute the visual test with fully: true which takes the snapshot of the complete page with scrolling
    it('should pass the visual test on NOP Commerce Login page with fully true', function () {
        cy.visit("https://www.nopcommerce.com");
        cy.get('a.userlink').click();
        cy.get('a.ico-login').click();
        cy.eyesCheckWindow({tag: 'Login page', target: 'window', fully: true})
    });

    // execute the visual testing with strict mode on header & footer, and layout mode for the page content area
    it('should pass the visual test on NOP Commerce Registration page with Strict check for header and footer and layout check on page body', function () {
        cy.visit("https://www.nopcommerce.com");
        cy.get('a.userlink').click();
        cy.get('a.ico-login').click();
        cy.get("input[value='Register']").click()
        cy.eyesCheckWindow({tag: 'Registration page', target: 'window', strict: [{selector: 'header.header'}, {selector: 'footer.footer'}], layout: [{selector: 'div.registration-page'}]})
    });

    //execute visual testing with layout mode on page body content
    it('should pass NOP Commerce Contact us page with Layout check on page body', function () {
        cy.visit("https://www.nopcommerce.com");
        cy.pause();
        cy.get('ul.top-menu.desktop > li:nth-of-type(3) span').click({force:true});
        cy.get("ul.top-menu.desktop > li:nth-of-type(3) > ul > li:nth-child(5) a").click({force: true});
        cy.eyesCheckWindow({target: 'Contact us page', target: 'window', layout: [{selector: '.page.contact-page'}]})
    });
})