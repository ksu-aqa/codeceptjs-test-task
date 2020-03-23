Feature('Todo counter');

Before((I) => {
  I.amOnPage('http://todomvc.com/examples/typescript-angular');
});

Scenario('test todo counter on add item', async (I, tdmvcPage) => {
  tdmvcPage.createMultipleTd();
  let tdCount = await I.grabNumberOfVisibleElements(tdmvcPage.tdInList);
  I.see(tdCount, tdmvcPage.tdLeftCounter);
});

Scenario('test todo counter on remove item', async (I, tdmvcPage) => {
  tdmvcPage.createMultipleTd();
  const lastTd = tdmvcPage.getLastTd();
  tdmvcPage.removeTd(lastTd);
  let tdCount = await I.grabNumberOfVisibleElements(tdmvcPage.tdInList);
  I.see(tdCount, tdmvcPage.tdLeftCounter);
});
