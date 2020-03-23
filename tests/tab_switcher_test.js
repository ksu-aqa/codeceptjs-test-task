Feature('Tab switcher');

const { tdmvcPage } = inject();

Before(I => I.amOnPage(tdmvcPage.url));

Scenario('test active tab', (I) => {
  tdmvcPage.createMultipleTd();
  I.click(tdmvcPage.completedCheckbox);
  I.click(tdmvcPage.activeTab);
  I.dontSeeElement(tdmvcPage.completedTd);
});

Scenario('test completed tab', (I) => {
  tdmvcPage.createMultipleTd();
  I.click(tdmvcPage.completedCheckbox);
  I.click(tdmvcPage.completedTab);
  I.seeElement(tdmvcPage.completedTd);
});
