Feature('TodoMVC');

Before((I) => {
  I.amOnPage('http://todomvc.com/examples/typescript-angular');
});

Scenario('create todo item', (I, tdmvcPage) => {
  tdmvcPage.createTd();
  I.see(tdmvcPage.tdTitle, tdmvcPage.lastTdLabel);
});

Scenario('remove todo item', (I, tdmvcPage) => {
  const toDo = tdmvcPage.createTd();
  I.moveCursorTo(toDo);
  I.click(toDo.find('.destroy'));
});

Scenario('edit todo item', (I, tdmvcPage) => {
  const toDo = tdmvcPage.createTd();
  const editToDo = toDo.find('input.edit');
  I.doubleClick(tdmvcPage.lastTdLabel);
  I.updateField(editToDo, tdmvcPage.updatedTdTitle)
  I.see(tdmvcPage.updatedTdTitle, tdmvcPage.lastTdLabel);
});
