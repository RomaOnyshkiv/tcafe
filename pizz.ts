import {Selector} from 'testcafe'

class Pizza {
    nonUiHand: Selector;
    nextStep1: Selector;
    nextStep2: Selector;
    nextStep3: Selector;
    paperoni: Selector;
    confAddress: Selector;
    phoneInput: Selector;
    restLocation: Selector;
    zoomIn: Selector;
    complOrder: Selector;
    constructor() {
        this.nonUiHand = Selector('.noUi-handle');
        this.nextStep1 = Selector('.next-step');
        this.paperoni = Selector('label[for="pepperoni"]');
        this.nextStep2 = Selector('#step2 .next-step');
        this.nextStep3 = Selector('#step3 .next-step');
        this.confAddress = Selector('.confirm-address');
        this.phoneInput = Selector('#phone-input');
        this.restLocation = Selector('.restaurant-location iframe');
        this.zoomIn = Selector('button[title="Zoom in"]');
        this.complOrder = Selector('.complete-order');
    }
}

export default new Pizza()
