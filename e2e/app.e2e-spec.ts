import { Ng2SciCompPage } from './app.po';

describe('ng2-sci-comp App', function() {
  let page: Ng2SciCompPage;

  beforeEach(() => {
    page = new Ng2SciCompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
