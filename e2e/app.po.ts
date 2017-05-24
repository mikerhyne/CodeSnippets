import { browser, by, element } from 'protractor';

export class CodeSnippetsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cs-root h1')).getText();
  }
}
