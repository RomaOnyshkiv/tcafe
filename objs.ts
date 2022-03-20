import { Selector } from 'testcafe'

class GPage{
    searchBtn: Selector;
    searchField: Selector;
    acceptCookie: Selector;

    constructor() {

        this.searchField = Selector(() => {
            return document.getElementsByName('q')
        });
        this.searchBtn = Selector(() => {
            return document.getElementsByName('btnK')
        });
        this.acceptCookie = Selector('#L2AGLb');

    }
}

export default new GPage()

