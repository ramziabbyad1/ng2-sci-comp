import { Ng2SciCompPage } from './app.po';

describe('ng2-sci-comp App', function() {
  let page: Ng2SciCompPage;
	let title: string;
  beforeEach(() => {
    page = new Ng2SciCompPage();
  	title = 'The prodigal son has returned...';
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(title);
  });
});
