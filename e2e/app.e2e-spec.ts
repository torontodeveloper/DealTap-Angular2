import { DealTapPage } from './app.po';

describe('deal-tap App', () => {
  let page: DealTapPage;

  beforeEach(() => {
    page = new DealTapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
