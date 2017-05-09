import { FCCSimonPage } from './app.po';

describe('fcc-simon App', () => {
  let page: FCCSimonPage;

  beforeEach(() => {
    page = new FCCSimonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
