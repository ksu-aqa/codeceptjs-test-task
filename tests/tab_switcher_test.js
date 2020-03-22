Feature('Tab switcher');

Before((I) => {
	I.amOnPage('http://todomvc.com/examples/typescript-angular');
});

Scenario('test active tab', (I, tdmvcPage) => {
	tdmvcPage.createMultipleTd();
	I.click(tdmvcPage.completedCheckbox);
	I.click(tdmvcPage.activeTab);
	I.dontSeeElement(tdmvcPage.completedTd);
});

Scenario('test completed tab', (I, tdmvcPage) => {
	tdmvcPage.createMultipleTd();
	I.click(tdmvcPage.completedCheckbox);
	I.click(tdmvcPage.completedTab);
	I.seeElement(tdmvcPage.completedTd);
});
