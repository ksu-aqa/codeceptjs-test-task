Feature('Completed todo');

const { tdmvcPage } = inject();

Before(I => I.amOnPage(tdmvcPage.url));

Scenario('mark todo item as completed', async (I) => {
  tdmvcPage.createTd();
  I.click(tdmvcPage.completedCheckbox);
  I.seeElement(tdmvcPage.completedTd);
});

Scenario('mark completed todo as active', async (I) => {
  tdmvcPage.createTd();
  I.click(tdmvcPage.completedCheckbox);
  I.seeElement(tdmvcPage.completedTd);
  I.click(tdmvcPage.completedCheckbox);
  I.dontSeeElement(tdmvcPage.completedTd);
});

Scenario('test clear completed button', async (I) => {
  tdmvcPage.createMultipleTd();
  const allTd = await I.grabNumberOfVisibleElements(tdmvcPage.tdInList);
  I.click(tdmvcPage.completedCheckbox);
  const completedTd = await I.grabNumberOfVisibleElements(tdmvcPage.completedTd);
  I.click(tdmvcPage.clearCompletedButton);
  I.seeNumberOfVisibleElements(tdmvcPage.tdInList, allTd - completedTd);
});
