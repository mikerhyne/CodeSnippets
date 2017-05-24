import { CodeSnippetsPage } from './app.po';

describe('code-snippets App', () => {
  let page: CodeSnippetsPage;

  beforeEach(() => {
    page = new CodeSnippetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cs works!');
  });
});
