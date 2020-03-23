const { I } = inject();

module.exports = {
  url: 'http://todomvc.com/examples/typescript-angular/',

  fields: {
    tdInput: '.new-todo',  
  },

  tdTitle: 'test',
  updatedTdTitle: 'New text',
	
  tdInList: 'label.ng-binding',
  tdLeftCounter: '.todo-count .ng-binding',
  completedTd: '.ng-scope.completed',
	
  activeTab: '[href="#/active"]',
  completedTab: '[href="#/completed"]',
	
  completedCheckbox: {css: '[ng-model="todo.completed"]'},
  clearCompletedButton: {css: '.clear-completed'},
  removeButton: {css: '.destroy'},

  getInputEditField() {
    return this.createTd().find('input.edit');
  },

  getLastTd() {
    return locate('.todo-list').find('li:last-child');
  },

  getLastTdLabel() {
    return this.getLastTd().find('label');
  },

  createTd() {
    I.fillField(this.fields.tdInput, this.tdTitle);
    I.pressKey("Enter");

    return locate('.todo-list').find('li');
  },

  createMultipleTd() {
    for (let i = 0; i < 5; i++) {
      this.createTd(this.tdTitle + i);
    }
  },

  removeTd(locator) {
    I.moveCursorTo(locator);
    I.click(locator.find(this.removeButton));
  }
}