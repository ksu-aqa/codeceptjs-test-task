Feature('TodoMVC');

Before((I) => {
  I.amOnPage('http://todomvc.com/examples/typescript-angular');
});

Scenario('create todo item', (I, tdmvcPage) => {
  tdmvcPage.createTd();
  I.see(tdmvcPage.tdTitle, tdmvcPage.tdLabel);
});

Scenario('remove todo item', (I, tdmvcPage) => {
  const toDo = tdmvcPage.createTd();
  tdmvcPage.removeTd(toDo);
  I.dontSeeElement(toDo);
});

Scenario('edit todo item', (I, tdmvcPage) => {
  const editToDo = tdmvcPage.createTd().find('input.edit');
  I.doubleClick(tdmvcPage.tdLabel);
  I.updateField(editToDo, tdmvcPage.updatedTdTitle)
  I.see(tdmvcPage.updatedTdTitle, tdmvcPage.tdLabel);
});
