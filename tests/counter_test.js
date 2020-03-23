Feature('Todo counter');

const { tdmvcPage } = inject();

Before(I => I.amOnPage(tdmvcPage.url));

Scenario('test todo counter on add item', async (I) => {
  tdmvcPage.createMultipleTd();
  let tdCount = await I.grabNumberOfVisibleElements(tdmvcPage.tdInList);
  I.see(tdCount, tdmvcPage.tdLeftCounter);
});

Scenario('test todo counter on remove item', async (I) => {
  tdmvcPage.createMultipleTd();
  const lastTd = tdmvcPage.getLastTd();
  tdmvcPage.removeTd(lastTd);
  let tdCount = await I.grabNumberOfVisibleElements(tdmvcPage.tdInList);
  I.see(tdCount, tdmvcPage.tdLeftCounter);
});
