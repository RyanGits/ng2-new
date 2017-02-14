import { Ng2NewPage } from './app.po';

describe('ng2-new App', function() {
  let page: Ng2NewPage;

  beforeEach(() => {
    page = new Ng2NewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
