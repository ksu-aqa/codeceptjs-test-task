Feature('TodoMVC');

const { tdmvcPage } = inject();

Before(I => I.amOnPage(tdmvcPage.url));

Scenario('create todo item', (I) => {
  tdmvcPage.createTd();
  I.see(tdmvcPage.tdTitle, tdmvcPage.getLastTdLabel());
});

Scenario('remove todo item', (I) => {
  const toDo = tdmvcPage.createTd();
  tdmvcPage.removeTd(toDo);
  I.dontSeeElement(toDo);
});

Scenario('edit todo item', (I) => {
  const editToDo = tdmvcPage.getInputEditField();
  I.doubleClick(tdmvcPage.getLastTdLabel());
  I.updateField(editToDo, tdmvcPage.updatedTdTitle)
  I.see(tdmvcPage.updatedTdTitle, tdmvcPage.getLastTdLabel());
});
