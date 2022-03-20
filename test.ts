import gpage from './objs'
import pizza from './pizz'

const pizzaData = require('./pizza.json');
const googData = require('./goog.json');

fixture `Basic tests`

test
    .page(`${pizzaData.url}`)
    (pizzaData.name, async t => {
    await t
        .setNativeDialogHandler(() => true)
        .drag(pizza.nonUiHand(), 100, 0)
        .click(pizza.nextStep1())
        .click(pizza.paperoni())
        .click(pizza.nextStep2())
        .click(pizza.confAddress())
        .typeText(pizza.phoneInput(), pizzaData.phone)
        .click(pizza.nextStep3())
        .switchToIframe(pizza.restLocation())
        .click(pizza.zoomIn())
        .switchToMainWindow()
        .click(pizza.complOrder());
});

test
    .page (`${googData.url}`)
    (googData.name, async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click(gpage.acceptCookie())
        .click(gpage.searchField())
        .typeText(gpage.searchField, googData.query)
        .click(gpage.searchBtn);
});
